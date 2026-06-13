import os
import re

files = [
    'src/components/Experience.jsx',
    'src/components/Achievements.jsx',
    'src/components/Hero.jsx'
]

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()

    # Timeline node in Experience
    content = content.replace(
        'bg-accent z-10 transition-transform',
        'bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 z-10 transition-transform'
    )
    
    # "Current" badge in Experience
    content = content.replace(
        'bg-accent/10 text-accent border border-accent/20',
        'bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-transparent bg-clip-text border border-indigo-500/20'
    )

    # Icon container in Achievements
    content = content.replace(
        'bg-accent/10 text-accent',
        'bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-violet-500/10 text-indigo-500'
    )
    
    # Specific text highlights that are just "text-accent" (not hover:text-accent)
    # E.g. className="text-sm font-semibold text-accent mb-4"
    content = re.sub(
        r'(?<!hover:)text-accent\b',
        r'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500',
        content
    )

    with open(filepath, 'w') as f:
        f.write(content)

print("Updated accents properly")
