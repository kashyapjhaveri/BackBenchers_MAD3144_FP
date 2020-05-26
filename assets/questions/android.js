const data ='[{\n' +
    '        "questionId": 1,\n' +
    '        "question": "What is an activity in Android?",\n' +
    '        "options": {\n' +
    '            "A" : "Activity performs the actions on the screen",\n' +
    '            "B" : "Manage the Application content",\n' +
    '            "C" : "Screen UI",\n' +
    '            "D" : "None of the above"\n' +
    '        },\n' +
    '        "answer": "A"\n' +
    '    },\n' +
    '    {\n' +
    '        "questionId": 2,\n' +
    '        "question": " How to move services to foreground in android?",\n' +
    '        "options": {\n' +
    '            "A" : "Services always work in Foreground only",\n' +
    '            "B" : " No,We can\'t do this query",\n' +
    '            "C" : "Using startService(Intent intent)",\n' +
    '            "D" : "startForeground(int id, Notification notification)"\n' +
    '        },\n' +
    '        "answer": "D"\n' +
    '    },\n' +
    '    {\n' +
    '        "questionId": 3,\n' +
    '        "question": "How to stop the services in android?",\n' +
    '        "options": {\n' +
    '            "A" : "finish()",\n' +
    '            "B" : "system.exit()",\n' +
    '            "C" : "By Manually",\n' +
    '            "D" : "stopSelf() and stopService()"\n' +
    '        },\n' +
    '        "answer": "D"\n' +
    '    },\n' +
    '    {\n' +
    '        "questionId": 4,\n' +
    '        "question": "What is the difference between content values and cursor in android SQlite?",\n' +
    '        "options": {\n' +
    '            "A" : "Content values are key pair values, which are updated or inserted in the database",\n' +
    '            "B" : "Cursor is used to store the temporary result",\n' +
    '            "C" : "A & B",\n' +
    '            "D" : "Content values are used to share the data."\n' +
    '        },\n' +
    '        "answer": "C"\n' +
    '    },\n' +
    '    {\n' +
    '        "questionId": 5,\n' +
    '        "question": "What is JNI in android",\n' +
    '        "options": {\n' +
    '            "A" : "Java Network Interface",\n' +
    '            "B" : "Java Interface",\n' +
    '            "C" : "Image editable tool",\n' +
    '            "D" : "Java Native Interface"\n' +
    '        },\n' +
    '        "answer": "D"\n' +
    '    },\n' +
    '    {\n' +
    '    "questionId": 6,\n' +
    '    "question": "What are the debugging techniques available in Android",\n' +
    '        "options":{\n' +
    '        "A" : "DDMS",\n' +
    '        "B" :  "Breaking Point",\n' +
    '        "C" : "Memory Profiling",\n' +
    '        "D" : "All of the Above"\n' +
    '        },\n' +
    '\n' +
    '\n' +
    '    "answer": "D"\n' +
    '},\n' +
    '    {\n' +
    '        "questionId": 7,\n' +
    '        "question": "What is the package name of HTTP client in android?",\n' +
    '        "options": {\n' +
    '            "A" : "com.json",\n' +
    '            "B" : "org.apache.http.client",\n' +
    '            "C" : "com.android.JSON",\n' +
    '            "D" : "org.json"\n' +
    '        },\n' +
    '        "answer": "B"\n' +
    '    },\n' +
    '    {\n' +
    '    "questionId": 8,\n' +
    '    "question": "What is fragment lifecycle in Android?",\n' +
    '    "options": {\n' +
    '        "A" : "onReceive()",\n' +
    '        "B" : "onCreate()",\n' +
    '        "C" : "onAttach()->onCreate() −> onCreateView() −> onActivityCreated() −> onStart() −> onResume()",\n' +
    '        "D" : "None of the Above"\n' +
    '    },\n' +
    '    "answer": "C"\n' +
    '},{\n' +
    '    "questionId": 9,\n' +
    '    "question": "What is transient data in android?",\n' +
    '    "options": {\n' +
    '        "A" : "Permanent Data",\n' +
    '        "B" : "Secure Data",\n' +
    '        "C" : "Temporary Data",\n' +
    '        "D" : "Logical Data"\n' +
    '    },\n' +
    '    "answer": "D"\n' +
    '},{\n' +
    '    "questionId": 10,\n' +
    '    "question": "What is an interface in android?",\n' +
    '    "options": {\n' +
    '        "A" :"Interface acts as a bridge between class and the outside world.",\n' +
    '        "B" :"Interface is a class",\n' +
    '        "C" : "Interface is a layout file",\n' +
    '        "D" : "None of the above"\n' +
    '    },\n' +
    '    "answer": "D"\n' +
    '},{\n' +
    '    "questionId": 11,\n' +
    '    "question": "How to move services to foreground in android?",\n' +
    '    "options": {\n' +
    '        "A" : "Services always work in Foreground only",\n' +
    '        "B" : " startForeground(int id, Notification notification).",\n' +
    '        "C" : " No, we don\'t do this QUERY",\n' +
    '        "D" : "Using startService(Intent intent)"\n' +
    '    },\n' +
    '    "answer": "B"\n' +
    '},{\n' +
    '    "questionId": 12,\n' +
    '    "question": " How to stop the services in android ?",\n' +
    '    "options": {\n' +
    '        "A" : "stopSelf() and stopService()",\n' +
    '        "B" : "system.exit()",\n' +
    '        "C" : "finish()",\n' +
    '        "D" : "By Manually"\n' +
    '    },\n' +
    '    "answer": "A"\n' +
    '},{\n' +
    '    "questionId": 13,\n' +
    '    "question": "___________ allows you to create large and complex layouts with a flat view hierarchy",\n' +
    '    "options": {\n' +
    '        "A" : "Constraint Layout",\n' +
    '        "B" : "Grid Layout",\n' +
    '        "C" : "Recycler View",\n' +
    '        "D" : "Relative layout"\n' +
    '    },\n' +
    '    "answer": "A"\n' +
    '},\n' +
    '    {\n' +
    '    "questionId": 14,\n' +
    '        "question": "Android application can be built by using following language.",\n' +
    '        "options": {\n' +
    '            "A" : "Java",\n' +
    '            "B" : "Kotlin",\n' +
    '            "C" : "Both A & B",\n' +
    '            "D" : "None of the above"\n' +
    '        },\n' +
    '        "answer": "C"\n' +
    '    },\n' +
    '    {\n' +
    '    "questionId": 15,\n' +
    '        "question": "Android is an operating system based on ________ with a Java programming interface for mobile devices such as Smartphone (Touch Screen Devices who supports Android OS) as well for Tablets too.",\n' +
    '        "options": {\n' +
    '            "A" : "Linux",\n' +
    '            "B" : "Windows",\n' +
    '            "C" : "Unix",\n' +
    '            "D" : "Linux Kernel"\n' +
    '        },\n' +
    '        "answer": "D"\n' +
    '    },\n' +
    '    {\n' +
    '    "questionId": 16,\n' +
    '        "question": "An ____________  is basically a message that is passed between components ",\n' +
    '        "options": {\n' +
    '            "A" : "Activity",\n' +
    '            "B" : "Intent",\n' +
    '            "C" : "Message",\n' +
    '            "D" : "CallBack"\n' +
    '        },\n' +
    '        "answer": "B"\n' +
    '    },{\n' +
    '    "questionId": 17,\n' +
    '    "question": "By using __________ attribute we can define the number of stars to display in RatingBar.",\n' +
    '    "options": {\n' +
    '        "A" : "android\\\\:numStars",\n' +
    '        "B" : "android\\\\:numberStars",\n' +
    '        "C" :  "android\\\\:noOfStars ",\n' +
    '        "D" : "android\\\\:totalNumberOfStars"\n' +
    '    },\n' +
    '    "answer": "A"\n' +
    '},{\n' +
    '    "questionId": 18,\n' +
    '    "question": "Can we call another activity using explicit intent?",\n' +
    '    "options": {\n' +
    '        "A" : "True",\n' +
    '        "B" : "False"\n' +
    '    },\n' +
    '    "answer": "A"\n' +
    '},{\n' +
    '    "questionId": 19,\n' +
    '    "question": "______________ folder contains XML files that describe the layout of the widgets (like buttons, text fields, Spinner, etc.) on the screens in your android application.",\n' +
    '    "options": {\n' +
    '        "A" : "XML",\n' +
    '        "B" : "layout",\n' +
    '        "C" : "res",\n' +
    '        "D" : "src"\n' +
    '    },\n' +
    '    "answer": "B"\n' +
    '},{\n' +
    '    "questionId": 20,\n' +
    '    "question": "]If EditText field is for password, then we need to specify the value of attribute _______ as “textPassword”.",\n' +
    '    "options": {\n' +
    '        "A" : "inputType",\n' +
    '        "B" : "DataType",\n' +
    '        "C" : "ispassword",\n' +
    '        "D" : "None Of This"\n' +
    '    },\n' +
    '    "answer": "D"\n' +
    '}\n' +
    ']\n';