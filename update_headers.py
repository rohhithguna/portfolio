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

# Regex to match the motion.div wrapping the section header
# It usually looks like:
#         <motion.div
#           initial={{ opacity: 0, y: -20 }}
#           whileInView={{ opacity: 1, y: 0 }}
#           viewport={{ once: true }}
#           transition={{ duration: 0.6 }}
#           className="text-center mb-..."
#         >
#           <h2 className="text-4xl... text-content">
#             TITLE
#           </h2>
#           <div className="h-1 w-24 mx-auto rounded-full bg-accent mb-8" />
#           (Optional P tag)
#         </motion.div>

for filepath in files_to_modify:
    with open(filepath, 'r') as f:
        content = f.read()

    # We need to replace the initial, whileInView, transition, and className of the header motion.div
    # and the h2 wrapping
    # and the underline div

    # Let's find the section header motion.div. It usually starts right after {/* Section Header */} or {/* Header */}
    
    # 1. Update motion.div props
    content = re.sub(
        r'initial=\{\{ opacity: 0, y: -20 \}\}\s*whileInView=\{\{ opacity: 1, y: 0 \}\}\s*viewport=\{\{ once: true \}\}\s*transition=\{\{ duration: 0\.6 \}\}\s*className="([^"]+)"',
        r'initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}\n          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}\n          viewport={{ once: true, margin: "-100px" }}\n          transition={{ duration: 0.8, ease: "easeOut" }}\n          className="\1 relative"',
        content
    )
    
    # 2. Wrap h2 and add glow
    # It looks like: <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-content">\n            TITLE\n          </h2>
    def repl_h2(match):
        h2_class = match.group(1)
        h2_text = match.group(2)
        # Add relative z-10 to h2 class
        new_h2_class = h2_class.replace('text-content', 'text-content relative z-10')
        return f'<div className="relative inline-block">\n            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-[40px] rounded-full -z-10" />\n            <h2 className="{new_h2_class}">\n{h2_text}\n            </h2>\n          </div>'
        
    content = re.sub(
        r'<h2 className="([^"]+)">\n\s*(.+?)\n\s*</h2>',
        repl_h2,
        content
    )

    # 3. Replace the underline
    # <div className="h-1 w-24 mx-auto rounded-full bg-accent mb-8" />
    content = re.sub(
        r'<div className="h-1 w-24 mx-auto rounded-full bg-accent mb-8" />',
        r'<motion.div initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="h-1 bg-accent mx-auto rounded-full mb-8" />',
        content
    )

    with open(filepath, 'w') as f:
        f.write(content)

print("Updated section headers")
