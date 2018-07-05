from sklearn import tree
features = [
    [1,8,4],
    [3,5,5],
    [3,4,4]
]
#games won/lost
# 0 for lose 1 for win
labels = [0,0,1]
classifier = tree.DecisionTreeClassifier()
#Learning Algorithm finds paterns
classifier = classifier.fit(features,labels)
print(classifier.predict([[2,4,3]]))
