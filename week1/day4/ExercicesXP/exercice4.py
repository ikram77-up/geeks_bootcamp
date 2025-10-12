class Family:
    def __init__(self, members,last_name):
        self.members = members
        self.last_name = last_name
    def born(self, **child):
        self.members.append(child)
        return f"{child['name']} {self.last_name} is born congratulation "
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return f"{name} not found in the family"
    def family_presentation(self):
        for member in self.members:
            print(f"{member['name']} {self.last_name}, {member['age']} years old")
object4 = Family([{'name': 'John', 'age': 40}, {'name': 'Jane', 'age': 38}], 'Doe')
object4.born(name='Alice', age=0)
object4.family_presentation()
def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{name} uses the power: {member['power']}")
                else:
                    print(f"{name} is too young to use power.")
                return
        print(f"{name} not found in the family.")
