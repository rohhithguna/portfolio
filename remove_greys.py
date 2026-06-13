import os
import glob
import re

files = glob.glob('src/components/**/*.jsx', recursive=True)
files.append('src/index.css')

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()

    # Colors
    content = content.replace('bg-black/5', 'bg-blue-500/5')
    content = content.replace('bg-black/10', 'bg-blue-500/10')
    content = content.replace('bg-black/[0.02]', 'bg-blue-500/[0.02]')
    
    content = content.replace('border-black/5', 'border-indigo-500/10')
    content = content.replace('border-black/10', 'border-indigo-500/15')
    content = content.replace('border-black/20', 'border-indigo-500/20')
    
    content = content.replace('text-black/50', 'text-indigo-900/60')
    content = content.replace('text-black/70', 'text-indigo-900/80')
    content = content.replace('text-black/90', 'text-indigo-950')
    
    # Specific RGBA replacements for Light Mode UI elements
    # rgba(15,23,42,0.08) -> border
    content = content.replace('rgba(15,23,42,0.08)', 'rgba(99,102,241,0.1)')
    # rgba(15,23,42,0.05) -> shadow
    content = content.replace('rgba(15,23,42,0.05)', 'rgba(99,102,241,0.08)')
    
    # ProjectCard specific grey borders:
    # "bg-[rgba(255,255,255,0.75)] border-[rgba(120,120,255,0.08)] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08),0_0_40px_rgba(99,102,241,0.05)] group-hover:border-[rgba(120,120,255,0.15)]"
    # Actually the shadow had rgba(0,0,0,0.08), we should change it to rgba(99,102,241,0.12)
    content = content.replace('rgba(0,0,0,0.08)', 'rgba(99,102,241,0.1)')

    with open(filepath, 'w') as f:
        f.write(content)

print("Removed grey tints.")
