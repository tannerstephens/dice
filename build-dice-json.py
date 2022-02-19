import json
from glob import glob

DICE_DIRECTORY = './build/assets/dice'
JSON_FILE = './build/assets/dice/dice.json'

dice = [dice_img.split('/')[-1] for dice_img in glob(f'{DICE_DIRECTORY}/*.jpg')]

with open(JSON_FILE, 'w') as f:
  json.dump(dice, f)
