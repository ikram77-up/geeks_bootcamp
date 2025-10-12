
from exercice4 import Family
class TheIncrediblesFamily(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)
    def use_power(self,name):
        for member in self.members:
            if member['name'] == name:
                try:
                   super().use_power(name)
                except KeyError:
                    return f"Member {name} not found"
        return f"{name} is not a member of the family"
    def incredible_presentation(self):
        return f'Here is our powerful family: {super().family_presentation()}'
members_data = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
     'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
     'power': 'read minds', 'incredible_name': 'SuperWoman'}
]
incredibles_family = TheIncrediblesFamily(members_data, "Incredibles")
incredibles_family.incredible_presentation()
incredibles_family.use_power("Michael")

incredibles_family.born(
    name='Baby Jack', age=1, gender='Male', is_child=True,
    power='Unknown Power', incredible_name='JackJack'
)
incredibles_family.incredible_presentation()