
    
mylist = [1, 2, '3', 4, 5]
for item in mylist:
    if isinstance(item, str):
        print(item)
    else:
        print('not a string')