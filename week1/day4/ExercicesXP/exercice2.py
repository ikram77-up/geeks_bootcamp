class Dog :
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self):
        return self.weight/self.age*10
    def fight(self, other_dog):
        if self.run_speed() > other_dog.run_speed():
            return f'{self.name} wins the fight'
        return f'{other_dog.name} wins the fight'
object2 = Dog("Dog", 5, 30)
object2 = Dog("Dog2", 10, 20)
print(object2.bark())
print(object2.run_speed())
print(object2.fight(Dog("Other Dog 3", 4, 25)))