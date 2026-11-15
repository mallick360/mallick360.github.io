# Résumé

The portfolio downloads `public/resume.pdf`.

- `build_resume.py` contains the résumé content and document styles.
- `resume.fodt` is the generated, editable LibreOffice Writer document.

To update the repeatable source, edit `build_resume.py`, then run from the repository:

```sh
python3 resume/build_resume.py
```

Requires Python 3 and LibreOffice. The script exports in a temporary directory and replaces the public PDF only after a successful export. It also regenerates `resume.fodt`, so direct changes to that file should be reflected in the script before rebuilding.

The résumé uses a single-column layout with selectable text and clickable contact links. Employment dates and the SDE-II / SDE-III progression at Only Much Louder follow the portfolio; education, certification, and early freelance experience are retained from the previous PDF.
