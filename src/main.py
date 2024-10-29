import os

def create_tree(startpath, output_file):
    with open(output_file, "w") as f:
        for root, dirs, files in os.walk(startpath):
            level = root.replace(startpath, "").count(os.sep)
            indent = " " * 4 * level
            f.write(f"{indent}{os.path.basename(root)}/\n")
            sub_indent = " " * 4 * (level + 1)
            for file in files:
                f.write(f"{sub_indent}{file}\n")

output_file = "directory_tree.txt"
create_tree(".", output_file)
print(f"Directory tree has been written to {output_file}")
