import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import ts from 'typescript'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const require = createRequire(import.meta.url)
const source = readFileSync(new URL('../src/sections/Contact.tsx', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText
function render(state = { submitting: false, succeeded: false, errors: null }) {
  const exports = {}
  let formId
  const submit = () => {}
  const reset = () => {}
  function element(tag) {
    return ({ children, variants, initial, whileInView, viewport, ...props }) => React.createElement(tag, props, children)
  }
  vm.runInNewContext(compiled, {
    exports,
    require: name => {
      if (name === '@formspree/react') return {
        useForm: id => { formId = id; return [state, submit, reset] },
        ValidationError: ({ field, ...props }) => state.errors && state.errors.field === field
          ? React.createElement('div', { id: props.id }, state.errors.message) : null,
      }
      if (name === 'framer-motion') return { motion: { div: element('div'), form: element('form') } }
      if (name === '@/constants/content') return {
        formspreeConfig: { formId: 'xwlolbvg' }, personal: { email: 'owner@example.com' }, socialLinks: [],
      }
      if (name === '@/components/SectionHeading') return { SectionHeading: () => null }
      if (name === '@/components/Button') return { Button: ({ icon, children, ...props }) => React.createElement('button', props, children) }
      if (name === '@/animations/variants') return { fadeUp: {} }
      return require(name)
    },
  })
  const tree = exports.Contact()
  return { html: renderToStaticMarkup(tree), tree, formId, submit, reset }
}
function findElement(tree, predicate) {
  if (!React.isValidElement(tree)) return undefined
  if (predicate(tree)) return tree
  for (const child of React.Children.toArray(tree.props.children)) {
    const found = findElement(child, predicate)
    if (found) return found
  }
}

test('uses the supplied form ID and posts all contact fields to Formspree', () => {
  const result = render()
  assert.equal(result.formId, 'xwlolbvg')
  assert.match(result.html, /action="https:\/\/formspree.io\/f\/xwlolbvg"/)
  assert.match(result.html, /method="POST"/)
  for (const name of ['name', 'email', 'subject', 'message']) assert.ok(result.html.includes(`name="${name}"`))
  assert.equal(findElement(result.tree, el => el.props.method === 'POST').props.onSubmit, result.submit)
  assert.doesNotMatch(result.html, /Thanks for reaching out/)
})
test('disables sending controls during submission', () => {
  const { html } = render({ submitting: true, succeeded: false, errors: null })
  assert.match(html, /aria-busy="true"/)
  assert.match(html, /Sending…/)
  assert.equal((html.match(/disabled=""/g) ?? []).length, 5)
})
test('renders provider validation errors without losing the form or fallback', () => {
  const { html } = render({ submitting: false, succeeded: false, errors: { field: 'email', message: 'Invalid email address' } })
  assert.match(html, /Invalid email address/)
  assert.match(html, /name="message"/)
  assert.match(html, /mailto:owner@example.com/)
  assert.doesNotMatch(html, /Thanks for reaching out/)
})
test('shows confirmation only on success and wires the reset action', () => {
  const result = render({ submitting: false, succeeded: true, errors: null })
  assert.match(result.html, /Thanks for reaching out/)
  assert.doesNotMatch(result.html, /name="email"/)
  const button = findElement(result.tree, el => el.props.children === 'Send another message')
  assert.equal(button.props.type, 'button')
  assert.equal(button.props.onClick, result.reset)
})
