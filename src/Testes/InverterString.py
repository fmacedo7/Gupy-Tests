def inverterString(string):
    nova_string = ""
    for i in range(len(string)-1, -1, -1):
        nova_string += string[i]
    return nova_string

minhaString = "Target Sistemas"
string_invertida = inverterString(minhaString)
print(string_invertida)