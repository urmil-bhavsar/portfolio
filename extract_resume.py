from zipfile import ZipFile
from xml.etree import ElementTree as ET

path = 'FSD resume latest 1.docx'
with ZipFile(path) as z:
    root = ET.fromstring(z.read('word/document.xml'))

ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
lines = []
for para in root.findall('.//w:p', ns):
    text = ''.join((node.text or '') for node in para.findall('.//w:t', ns))
    if text.strip():
        lines.append(text.strip())

with open('resume_text.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print('Extracted lines:', len(lines))
print('\n'.join(lines[:80]))
