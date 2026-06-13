import os
import re

files_to_modify = [
    'src/components/Experience.jsx',
    'src/components/Projects.jsx',
    'src/components/Achievements.jsx',
    'src/components/AboutMe.jsx',
    'src/components/Skills.jsx',
    'src/components/Contact.jsx'
]

for filepath in files_to_modify:
    with open(filepath, 'r') as f:
        content = f.read()

    # 1. Update atmospheric glow behind title
    # from: bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-[40px]
    # to: bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-10 blur-[120px]
    content = re.sub(
        r'bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-\[40px\]',
        r'bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-10 blur-[120px]',
        content
    )
    
    # 2. Update gradient underline
    # from: className="h-1 bg-accent mx-auto rounded-full mb-8"
    # to: className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 mx-auto rounded-full mb-8"
    content = re.sub(
        r'className="h-1 bg-accent mx-auto rounded-full mb-8"',
        r'className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 mx-auto rounded-full mb-8"',
        content
    )

    with open(filepath, 'w') as f:
        f.write(content)

print("Updated headings")
