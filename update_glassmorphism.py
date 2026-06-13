import os
import re

# Update ProjectCard.jsx
filepath = 'src/components/ProjectCard.jsx'
with open(filepath, 'r') as f:
    content = f.read()

content = re.sub(
    r'backdrop-blur-xl transition-all',
    r'backdrop-blur-lg transition-all',
    content
)

content = re.sub(
    r'"bg-white/70 border-black/5 group-hover:shadow-\[0_20px_40px_-15px_rgba\(0,0,0,0\.08\),0_0_40px_rgba\(99,102,241,0\.05\)\] group-hover:border-black/10"',
    r'"bg-[rgba(255,255,255,0.75)] border-[rgba(120,120,255,0.08)] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08),0_0_40px_rgba(99,102,241,0.05)] group-hover:border-[rgba(120,120,255,0.15)]"',
    content
)

with open(filepath, 'w') as f:
    f.write(content)


# Update Experience.jsx
filepath = 'src/components/Experience.jsx'
with open(filepath, 'r') as f:
    content = f.read()

content = re.sub(
    r'backdrop-blur-sm transition-all',
    r'backdrop-blur-lg transition-all',
    content
)

content = re.sub(
    r'"bg-surface border-black/5 hover:border-black/10 hover:shadow-\[0_20px_40px_-15px_rgba\(0,0,0,0\.08\),0_0_40px_rgba\(99,102,241,0\.05\)\] shadow-sm"',
    r'"bg-[rgba(255,255,255,0.75)] border-[rgba(120,120,255,0.08)] hover:border-[rgba(120,120,255,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08),0_0_40px_rgba(99,102,241,0.05)] shadow-sm"',
    content
)

with open(filepath, 'w') as f:
    f.write(content)


# Update Achievements.jsx
filepath = 'src/components/Achievements.jsx'
with open(filepath, 'r') as f:
    content = f.read()

content = re.sub(
    r'backdrop-blur-sm transition-all',
    r'backdrop-blur-lg transition-all',
    content
)

content = re.sub(
    r'"bg-surface border-black/5 hover:border-black/10 hover:shadow-\[0_20px_40px_-15px_rgba\(0,0,0,0\.08\),0_0_40px_rgba\(99,102,241,0\.05\)\] shadow-sm"',
    r'"bg-[rgba(255,255,255,0.75)] border-[rgba(120,120,255,0.08)] hover:border-[rgba(120,120,255,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08),0_0_40px_rgba(99,102,241,0.05)] shadow-sm"',
    content
)

with open(filepath, 'w') as f:
    f.write(content)

print("Updated glassmorphism cards")
