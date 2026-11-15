#!/usr/bin/env python3
"""Build an editable FODT résumé and export public/resume.pdf with LibreOffice."""
from pathlib import Path
import subprocess
import tempfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
NS = {
    'office': 'urn:oasis:names:tc:opendocument:xmlns:office:1.0',
    'style': 'urn:oasis:names:tc:opendocument:xmlns:style:1.0',
    'text': 'urn:oasis:names:tc:opendocument:xmlns:text:1.0',
    'fo': 'urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0',
    'svg': 'urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0',
    'xlink': 'http://www.w3.org/1999/xlink',
    'dc': 'http://purl.org/dc/elements/1.1/',
    'meta': 'urn:oasis:names:tc:opendocument:xmlns:meta:1.0',
}
for prefix, uri in NS.items():
    ET.register_namespace(prefix, uri)
def q(name):
    prefix, local = name.split(':')
    return '{' + NS[prefix] + '}' + local
def el(parent, name, attrs=None, text=None):
    node = ET.SubElement(parent, q(name), {q(k): v for k, v in (attrs or {}).items()})
    node.text = text
    return node

root = ET.Element(q('office:document'), {q('office:version'): '1.3', q('office:mimetype'): 'application/vnd.oasis.opendocument.text'})
meta = el(root, 'office:meta')
el(meta, 'dc:title', text='Aashish Mallick | Full-stack Engineering & Systems Architecture')
el(meta, 'dc:subject', text='Full-time Forward Deployed Engineer opportunities')
el(meta, 'meta:initial-creator', text='Aashish Mallick')
fonts = el(root, 'office:font-face-decls')
el(fonts, 'style:font-face', {'style:name': 'ResumeSans', 'svg:font-family': 'Liberation Sans'})
styles = el(root, 'office:styles')
link_style = el(styles, 'style:style', {'style:name': 'ResumeLink', 'style:family': 'text'})
el(link_style, 'style:text-properties', {'fo:color': '#172c40', 'style:text-underline-style': 'solid', 'style:text-underline-width': 'auto'})
def style(name, size='10pt', bold=False, color='#202735', para=None, italic=False):
    s = el(styles, 'style:style', {'style:name': name, 'style:family': 'paragraph'})
    props = {'fo:font-size': size, 'style:font-name': 'ResumeSans', 'fo:color': color}
    if bold: props['fo:font-weight'] = 'bold'
    if italic: props['fo:font-style'] = 'italic'
    el(s, 'style:text-properties', props)
    pp = {'fo:line-height': '118%', 'fo:margin-bottom': '0.04in', 'fo:margin-top': '0in'}
    pp.update(para or {})
    el(s, 'style:paragraph-properties', pp)
style('Body')
style('Name', '24pt', True, para={'fo:margin-bottom': '0.05in', 'fo:keep-with-next': 'always'})
style('Tagline', '11pt', True, '#172c40', {'fo:margin-bottom': '0.07in', 'fo:keep-with-next': 'always'})
style('Contact', '9pt', color='#344456', para={'fo:margin-bottom': '0.12in'})
style('Summary', '10pt', para={'fo:margin-bottom': '0.10in'})
section_props = {'fo:margin-top': '0.12in', 'fo:margin-bottom': '0.07in', 'fo:keep-with-next': 'always', 'fo:border-bottom': '0.5pt solid #6b7b8b', 'fo:padding-bottom': '0.035in'}
style('Section', '10pt', True, '#172c40', section_props)
style('SectionNewPage', '10pt', True, '#172c40', {**section_props, 'fo:break-before': 'page', 'fo:margin-top': '0in'})
style('Job', '10.5pt', True, para={'fo:margin-top': '0.07in', 'fo:margin-bottom': '0.02in', 'fo:keep-with-next': 'always'})
style('Meta', '9pt', color='#4a5764', para={'fo:margin-bottom': '0.07in', 'fo:keep-with-next': 'always'})
style('Stack', '9pt', color='#4a5764', para={'fo:margin-top': '0.02in', 'fo:margin-bottom': '0.07in'})
style('Footer', '8pt', color='#687583', para={'fo:text-align': 'end', 'fo:margin-top': '0.08in'})
style('Bullet', '10pt', para={'fo:margin-bottom': '0.045in', 'fo:keep-together': 'always'})
ls = el(styles, 'text:list-style', {'style:name': 'Bullets'})
level = el(ls, 'text:list-level-style-bullet', {'text:level': '1', 'text:bullet-char': '•'})
el(level, 'style:list-level-properties', {'text:space-before': '0in', 'text:min-label-width': '0.13in'})
auto = el(root, 'office:automatic-styles')
layout = el(auto, 'style:page-layout', {'style:name': 'Page'})
el(layout, 'style:page-layout-properties', {'fo:page-width': '8.5in', 'fo:page-height': '11in', 'fo:margin-top': '0.48in', 'fo:margin-bottom': '0.45in', 'fo:margin-left': '0.58in', 'fo:margin-right': '0.58in', 'style:print-orientation': 'portrait'})
master = el(root, 'office:master-styles')
page = el(master, 'style:master-page', {'style:name': 'Standard', 'style:page-layout-name': 'Page'})
footer = el(page, 'style:footer')
p = el(footer, 'text:p', {'text:style-name': 'Footer'}, 'Aashish Mallick  |  ')
el(p, 'text:page-number', {'text:select-page': 'current'}, '1')
body = el(el(root, 'office:body'), 'office:text')
def p(text, kind='Body'):
    return el(body, 'text:p', {'text:style-name': kind}, text)
def link(parent, label, url):
    return el(parent, 'text:a', {'xlink:href': url, 'xlink:type': 'simple', 'text:style-name': 'ResumeLink', 'text:visited-style-name': 'ResumeLink'}, label)
def bullets(items):
    listing = el(body, 'text:list', {'text:style-name': 'Bullets'})
    for item in items:
        li = el(listing, 'text:list-item')
        el(li, 'text:p', {'text:style-name': 'Bullet'}, item)
def job(title, dates):
    p(title, 'Job'); p(dates, 'Meta')

p('AASHISH MALLICK', 'Name')
p('Full-stack Engineer | Systems & Solution Architecture', 'Tagline')
contact = p('', 'Contact')
for index, (label, url) in enumerate([
    ('aashishmallick360@gmail.com', 'mailto:aashishmallick360@gmail.com'),
    ('+91 75009 33234', 'tel:+917500933234'),
    ('LinkedIn', 'https://www.linkedin.com/in/aashish360/'),
    ('Portfolio', 'https://aashishmallick.com'),
    ('GitHub', 'https://github.com/mallick360/'),
]):
    a = link(contact, label, url)
    if index < 4: a.tail = '  |  '
p('Full-stack engineer with 7+ years of experience translating complex business requirements into production software across enterprise AI, analytics, SaaS, and real-time applications. Hands-on across interfaces, backend services, integrations, data, and AWS/GCP infrastructure. Experienced in solution architecture, security, observability, and leading a six-engineer team. Seeking full-time Forward Deployed Engineer roles with end-to-end technical ownership.', 'Summary')
p('PROFESSIONAL EXPERIENCE', 'Section')
job('enGen Global | SDE-III', 'Sep 2025 – Present | Hyderabad')
bullets([
    'Architected and implemented enterprise RAG solutions for U.S. healthcare, enabling individual and team AI assistants with secure retrieval, fine-grained access controls, guardrails, and prompt governance.',
    'Built a coaching platform using Gemini Live Audio for real-time voice simulations and personalized feedback for customer service representatives.',
    'Designed LLM evaluation and observability pipelines to monitor response quality, hallucinations, drift, latency, and reliability in production AI applications.',
    'Worked with engineering, security, and business stakeholders to translate sensitive-data and governance requirements into retrieval policies and application controls.',
    'Established reusable AI-agent capabilities, evaluation frameworks, and deployment standards; prototyped Azure AI Services integration with the Gemini ecosystem.',
])
p('Stack: Python, FastAPI, Flask, React, TypeScript, Docker, GCP, Vertex AI, Gemini, Kafka, BigQuery, Cloud SQL, Firestore', 'Stack')
job('Only Much Louder | SDE-III; previously SDE-II', 'SDE-III: Apr 2024 – Sep 2025 | SDE-II: Mar 2023 – Mar 2024 | Bangalore')
bullets([
    'Led development of a creator analytics microservice using Django, Go, PostgreSQL, and React for Hyp.io, serving 100+ customers with insights across 280M+ creator profiles.',
    'Delivered contract management, credits-based billing, transaction history APIs, and client- and sales-facing interfaces, supporting 1,000+ simultaneous activities.',
    'Integrated Meta Graph API with OAuth 2.0, achieving sub-second retrieval for analytics covering 200K+ creators; implemented attribute-based view/edit permissions.',
    'Led GDPR compliance through encryption, access controls, and privacy-first AWS workflows; secured 1,000+ user records and passed audits with zero violations.',
    'Built 20+ React/MUI business flows, a reusable 50+ component design system, and an SEO-focused Next.js/Strapi application.',
    'Led and mentored six engineers, improving sprint velocity by 30%; architected AWS applications with 99.99% uptime and sub-200ms response times.',
])
p('Stack: React, Next.js, TypeScript, MUI, Django, Go, PostgreSQL, MongoDB, Docker, AWS', 'Stack')

p('PROFESSIONAL EXPERIENCE — CONTINUED', 'SectionNewPage')
job('Byju’s — The Learning App | SDE-II', 'Mar 2022 – Mar 2023 | Bangalore')
bullets([
    'Built automated student-performance PDF reporting with Handlebars.js and Puppeteer for 10K student analytics, and timestamped video feedback interfaces for 10K users.',
    'Delivered tutor task-management and scheduling interfaces, plus CMS workflows for batch management, test scheduling, and monthly assessments.',
])
p('Stack: React, Next.js, Redux, TypeScript, MUI, Puppeteer, Handlebars.js', 'Stack')
job('10times Internet Pvt. Ltd. | SDE-I', 'Jan 2019 – Mar 2022 | Noida')
bullets([
    'Built a real-time communication platform with video conferencing and instant messaging for 1,000+ daily active users.',
    'Delivered SaaS capabilities spanning CRM, CMS, and 10+ third-party integrations, supporting interest- and location-based lead generation.',
    'Integrated Stripe and maintained Razorpay payment workflows; built a reusable email templating engine and Firebase-based real-time chat.',
])
p('Stack: React, Redux, JavaScript, PHP, Symfony, CodeIgniter, MySQL, Firebase', 'Stack')
job('Freelance Development | Early experience', 'Jun 2017 – Jan 2019 | Ghaziabad')
p('Built AR interactions with Unity/Vuforia and browser-based 3D visualizations using WebGL.', 'Body')
p('TECHNICAL SKILLS', 'Section')
for text in [
    'Languages: Python, TypeScript, JavaScript, Go, SQL, HTML/CSS',
    'Product & services: React, Next.js, Redux, MUI, Django, FastAPI, Flask, Node.js, REST APIs, OAuth 2.0, ABAC',
    'AI & data: Gemini, Vertex AI, RAG, AI agents, LLM evaluation, PostgreSQL, MongoDB, BigQuery, Cloud SQL, Firestore, Kafka',
    'Cloud & operations: GCP, AWS (EC2, ECS, RDS, Lambda, API Gateway, SQS, CloudWatch, CloudFormation), Docker, Git',
]: p(text)
p('EDUCATION', 'Section')
p('B.Tech, Computer Science & Engineering | 2015 – 2019', 'Job')
p('Krishna Institute of Engineering & Technology | AKTU | 75.6%', 'Body')
p('CERTIFICATION', 'Section')
p('Google Cloud — Generative AI Leader | May 2026 – May 2029', 'Job')
cert = p('', 'Body')
link(cert, 'View credential on Credly', 'http://credly.com/earner/earned/badge/43828e36-f8aa-4a7a-8369-5593d579adf7')
p('SELECTED EARLY PROJECTS', 'Section')
p('School of Innovation India from Facebook at SV.CO: interactive VR experience using Unity and Meta Quest. Document Tracker: embeddable document-tracking library. Echoes and Shadows: standalone Unity RPG.', 'Body')

source = ROOT / 'resume' / 'resume.fodt'
ET.indent(root)
ET.ElementTree(root).write(source, encoding='utf-8', xml_declaration=True)
with tempfile.TemporaryDirectory(prefix='portfolio-resume-') as temp:
    export_dir = Path(temp) / 'export'
    export_dir.mkdir()
    subprocess.run([
        'libreoffice', '-env:UserInstallation=' + Path(temp).as_uri(), '--headless',
        '--convert-to', 'pdf:writer_pdf_Export', '--outdir', str(export_dir), str(source),
    ], check=True)
    generated = export_dir / 'resume.pdf'
    if not generated.is_file() or not generated.read_bytes().startswith(b'%PDF-'):
        raise RuntimeError('LibreOffice did not produce a valid PDF; existing résumé is unchanged.')
    (ROOT / 'public' / 'resume.pdf').write_bytes(generated.read_bytes())
print('Updated public/resume.pdf and resume/resume.fodt')
