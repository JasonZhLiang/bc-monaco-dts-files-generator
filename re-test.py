import json
import os
import re

s = 'Make the 3 World a *Better Place*'
pattern = r'\*(.*?)\*'
replacement = r'<b>\1<\\b>'
html = re.sub(pattern, replacement, s)

print(html)

pattern = r'(\d+) (\w+)'
html = re.sub(pattern, r"2\ \1", s)

print(html)

txt = "The rain in Spain"
x = re.search("^The.*\sin", txt)

if x:
    print(type(x.group(0)))
else:
    print("No match")

# Replace the first two occurrences of a white-space character with the digit 9:

# txt = "The rain in Spain"
# x = re.sub("\s", "9", txt, 2)
# print(x)


txt = '''before the tag
1234
TAGS
this line will keep
this line will keep
this line will keep
TAGE
search text and pattern
bbb
ccc
'''
search = re.search(r"(?s)before.*TAGS", txt)
# print(search.group(0))

extract = re.search(r"(?s)TAGS.*TAGE", txt)
# print(extract.group(0))

# within one line
groupstest = re.search("search (.*) pattern", txt)
# search cross multilines
# groupstest = re.search("(?s)search(.*)ccc", txt)

# group(1) will return the 1st capture (stuff within the brackets).
# group(0) will return the entire matched text.
print(groupstest.group(1))
print(groupstest.group(0))

a = re.sub("(?s)before.*TAGS", "", txt)
# print(a)
b = re.sub("(?s)TAGE.*ccc", "", a)
# print(b)


data = [("B", 5, "20"), ("A", 1, "5"), ("C", 6, "10")]
# sort by the first value(letter) of tuples
data.sort(key=lambda x: x[0])

print(data)


path = "./dtsfiles"
dir_list = os.listdir(path)

print("Files and directories in '", path, "' :")
# print the list
print(dir_list)
print(dir_list.sort())
print(dir_list)
