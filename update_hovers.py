import os
import glob
import re

files = glob.glob('src/components/**/*.jsx', recursive=True)

# We want to replace 'group-hover:text-accent' and 'hover:text-accent' with gradient classes, but be careful of SVGs.
gradient_hover = "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500"
gradient_group_hover = "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-violet-500"

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()

    # ProjectCard Title
    content = content.replace('group-hover:text-accent transition-colors', f'{gradient_group_hover} transition-all')
    
    # Navbar links
    content = content.replace('hover:text-accent hover:bg-blue-500/5 dark:hover:bg-white/5', f'{gradient_hover} hover:bg-blue-500/5 dark:hover:bg-white/5')
    
    # Let's just safely replace hover:text-accent where it makes sense.
    # Actually, if it's applied to an <a> or <button> that contains an icon, it will make the text gradient but the SVG will lose its color if it relies on currentColor, because currentColor becomes transparent!
    # A workaround for SVG with bg-clip-text is it becomes invisible! 
    # So we must avoid applying bg-clip-text to SVGs.
    
    # For now, let's just do the Title in ProjectCard, Experience, etc.
    # Experience role title:
    # <h3 className="text-xl md:text-2xl font-bold text-content group-hover:text-accent transition-colors duration-300">
    
    with open(filepath, 'w') as f:
        f.write(content)

print("Updated hover states")
