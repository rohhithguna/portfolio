import re

# 1. Update Hero.jsx
with open('src/components/Hero.jsx', 'r') as f:
    hero = f.read()

hero = hero.replace('https://github.com/rohhithg"', 'https://github.com/rohhithguna"')
hero = hero.replace('aria-label="GitHub"', 'aria-label="GitHub Profile"')

with open('src/components/Hero.jsx', 'w') as f:
    f.write(hero)

# 2. Update projectsData.js
with open('src/data/projectsData.js', 'r') as f:
    projects = f.read()

# Define the precise links
links_map = {
    'ResilAI': 'https://github.com/rohhithguna/ResiliAI',
    'AttackSim': 'https://github.com/rohhithguna/attacksim',
    'PackAI': 'https://github.com/rohhithguna/PackAI',
    'VentureSim': 'https://github.com/rohhithguna/VentureSim',
    'PulseLink': 'https://github.com/rohhithguna/PulseLink',
    'DocVerify': 'https://github.com/rohhithguna/DocVerify',
    'macOS Web Simulation': 'https://github.com/rohhithguna/macOS',
    'Zephyx': 'https://github.com/rohhithguna/Zephyx'
}

# We will just manually replace the links block for each project using regex
for title, link in links_map.items():
    # Find the project block
    pattern = rf"(title:\s*'{title}'.*?links:\s*{{)(.*?)(}})"
    
    def replacer(m):
        links_content = m.group(2)
        # replace github: '...' or github: null
        links_content = re.sub(r"github:\s*('.*?'|null)", f"github: '{link}'", links_content)
        return m.group(1) + links_content + m.group(3)
        
    projects = re.sub(pattern, replacer, projects, flags=re.DOTALL)

# Add repositoryStats to all projects
# Find all `links: { ... }` blocks and insert `repositoryStats` before it
# We can just do a regex replace
def stats_replacer(m):
    return "repositoryStats: {\n            stars: 0,\n            forks: 0,\n            lastUpdated: 'Recently'\n        },\n        " + m.group(0)

projects = re.sub(r"links:\s*{", stats_replacer, projects)

# PeerLink wasn't specified, let's nullify it to avoid broken placeholder
projects = re.sub(r"(title:\s*'PeerLink'.*?links:\s*{.*?github:\s*)'.*?'", r"\1null", projects, flags=re.DOTALL)

with open('src/data/projectsData.js', 'w') as f:
    f.write(projects)

print("Updated projectsData.js and Hero.jsx")
