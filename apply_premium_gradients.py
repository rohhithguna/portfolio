import os
import glob

files = glob.glob('src/components/**/*.jsx', recursive=True)

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()

    # 1. Group hover text gradient
    content = content.replace(
        'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-violet-500 transition-all',
        'group-hover:text-gradient-premium transition-all'
    )
    
    # 2. Hover text gradient
    content = content.replace(
        'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500',
        'hover:text-gradient-premium'
    )
    
    # 3. Static text gradient
    content = content.replace(
        'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500',
        'text-gradient-premium'
    )
    
    # 4. Background gradient
    content = content.replace(
        'bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500',
        'bg-gradient-premium'
    )

    with open(filepath, 'w') as f:
        f.write(content)

print("Updated to premium enterprise gradients.")
