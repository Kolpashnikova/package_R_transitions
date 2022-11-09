# package_R_transitions

## Interactive Chord Diagram for Time-Use Data in R

### Installation

```
devtools::install_github("Kolpashnikova/package_R_transitions")

library(transitions)
```

### Description
Draws transitions from and into an activity in a chord diagram.


### Usage
transitions(df, names)

- df	
a json data.Each row represents activity, and each element within the list of rows represents the transition INTO that activity. The diagonal represents the transitions from an activity into itself and is usually coded as zeros.

Example of the data:
```
[[0,0.3178,0.2864,0.0288,0.0553,0.05,0.0043,0.0968,0.2071,0.1213,0.0787, 0.1593,0,0.2137,0.0181,0.0301,0.0434,0.0222,0.1485,0.0993,0.1838,0.2677, 0.0917,0.2185,0,0.0892,0.1103,0.0671,0.0411,0.4207,0.6573,0.415,0.3529, 0.0255,0.0245,0.0866,0,0.0132,0.0096,0.0044,0.0262,0.0154,0.0349,0.105, 0.0331,0.0302,0.1184,0.0115,0,0.0075,0.0263,0.0603,0.0573,0.0973,0.2167, 0.0238,0.0313,0.0783,0.0112,0.0087,0,0.0251,0.032,0.1476,0.1164,0.2607, 0.0021,0.0051,0.0688,0.0037,0.0271,0.0033,0,0.0145,0.0411,0.0352,0.4843, 0.492,0.1544,0.2838,0.0269,0.0521,0.0196,0.0197,0,0.1157,0.2408,0.0967, 0.0442,0.1178,0.4246,0.0311,0.0489,0.1565,0.0356,0.334,0,0.3282,0.2762, 0.2573,0.1662,0.3957,0.0206,0.0839,0.1209,0.0614,0.2327,0.197,0,0.5597, 0.0758,0.1328,0.5125,0.1041,0.2294,0.2701,0.445,0.1428,0.2598,0.5263,0]]
```

- names	
a json data containing information about activity names presented in the same order as the rows and columns of the df object.

Example of the names input:
```
["Sleep","PCare","Housework","CC","AC","Work","Shop","TV","Eating","Leisure","Travel and Other"]
```

### How it looks like

You can try the interactive demo here: (https://kolpashnikova.github.io/transitions)

![Transitions](https://github.com/Kolpashnikova/package_R_transitions/blob/main/examples/transitions.png)

### References
Kolpashnikova, Kamila. (2022). Interactive Chord Diagram for Time-Use Data in R. Toronto,ON: York University.


