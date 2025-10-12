import random
from exercice2 import Dog;
class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False ):
        super().__init__(name, age, weight)
        self.trained  = trained 

    def train(self):
        self.trained = True
        return super().bark()
# object3 = PetDog("PetDog", 3, 25)
# print(object3.bark())
    def play(self,*args):
        return  f'{", ".join(args)} all play together'
    def do_a_trick(self):
       phrases=[
           f'{self.name} does a barrel roll',
           f'{self.name} stands on his back legs',
           f'{self.name} shakes your hand',
           f'{self.name} plays dead',
       ]
       return random.choice(phrases)