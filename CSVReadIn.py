import csv
import random

import matplotlib.pyplot as plt
import tensorflow as tf
import numpy as np

sess = tf.Session()
rawData = []
coverType = []
colNames = ["Elevation", "Aspect", "Slope", "Horizontal_Distance_To_Hydrology", "Vertical_Distance_To_Hydrology", "Horizontal_Distance_To_Roadways", "Hillshade_9am", "Hillshade_Noon", "Hillshade_3pm", "Horizontal_Distance_To_Fire_Points"]

for i in range (0, 4):
    line = "Wilderness_Area_" + str(i)
    colNames.append(line)

for i in range (0, 40):
    line = "Soil_Type_" + str(i)
    colNames.append(line)

colNames.append("CoverType")

with open('C:\development\covtype.csv', 'rt') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in spamreader:
        temp = row
        rawData.append(row[0:len(row)-1])
        coverType.append(row[len(row)-1])

i = 0
while i < len(rawData):
    for j in range(0, len(rawData)):
        rawData[i][j] = int(rawData[i][j])
    i += 1

points = tf.convert_to_tensor(rawData, dtype = tf.int32)
print(points)
