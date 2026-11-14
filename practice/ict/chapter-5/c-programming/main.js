"use strict";

const CLUSTERS = [
 {
  "code": "A",
  "name": "I/O ও গাণিতিক সূত্র",
  "diff": "সহজ",
  "imp": "মাঝারি"
 },
 {
  "code": "B",
  "name": "ক্যারেক্টার ফাংশন",
  "diff": "সহজ",
  "imp": "নিম্ন-মাঝারি"
 },
 {
  "code": "C",
  "name": "তুলনা / if-else",
  "diff": "সহজ",
  "imp": "উচ্চ"
 },
 {
  "code": "D",
  "name": "সংখ্যার বৈশিষ্ট্য পরীক্ষা",
  "diff": "সহজ-মাঝারি",
  "imp": "উচ্চ"
 },
 {
  "code": "E",
  "name": "switch-case",
  "diff": "সহজ",
  "imp": "উচ্চ"
 },
 {
  "code": "F",
  "name": "ধারা / যোগফলের লুপ",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ"
 },
 {
  "code": "G",
  "name": "লুপে গণনা",
  "diff": "মাঝারি",
  "imp": "উচ্চ"
 },
 {
  "code": "H",
  "name": "ক্লাসিক সংখ্যা অ্যালগরিদম",
  "diff": "মাঝারি-কঠিন",
  "imp": "অতি উচ্চ"
 },
 {
  "code": "I",
  "name": "লুপ নিয়ন্ত্রণ",
  "diff": "সহজ",
  "imp": "উচ্চ"
 },
 {
  "code": "J",
  "name": "অ্যারে",
  "diff": "মাঝারি",
  "imp": "মাঝারি-উচ্চ"
 },
 {
  "code": "K",
  "name": "ফাংশন",
  "diff": "মাঝারি",
  "imp": "মাঝারি"
 },
 {
  "code": "L",
  "name": "স্ট্রিং",
  "diff": "মাঝারি",
  "imp": "নিম্ন-মাঝারি"
 },
 {
  "code": "M",
  "name": "উদ্দীপক: আউটপুট ট্রেস",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ"
 },
 {
  "code": "N",
  "name": "উদ্দীপক: ভুল খুঁজে ঠিক করা",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ"
 },
 {
  "code": "O",
  "name": "উদ্দীপক: অ্যালগরিদম ↔ কোড",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ"
 }
];

const PROBLEMS = [
 {
  "id": "P1",
  "title": "কি-বোর্ড থেকে ২টি পূর্ণসংখ্যার যোগফল",
  "part": 1,
  "cluster": "A",
  "pattern": "সরাসরি সূত্র",
  "diff": "সহজ",
  "imp": "মাঝারি",
  "stmt": "ব্যবহারিক-১: কি-বোর্ডের মাধ্যমে গৃহীত ২টি পূর্ণসংখ্যার যোগফল নির্ণয়ের জন্য 'C' ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int a,b,c;\n    printf(\"Enter first number:\");\n    scanf(\"%d\",&a);\n    printf(\"Enter second number:\");\n    scanf(\"%d\",&b);\n    c=a+b;\n    printf(\"%d + %d = %d\\n\", a, b, c);\n    return 0;\n}",
  "note": "**ফলাফল (Output):**\n> Enter first number: 5\n> Enter second number: 10\n> 5 + 10 = 15",
  "issue": ""
 },
 {
  "id": "P2",
  "title": "সেন্টিগ্রেড থেকে ফারেনহাইট",
  "part": 1,
  "cluster": "A",
  "pattern": "সরাসরি সূত্র",
  "diff": "সহজ",
  "imp": "মাঝারি",
  "stmt": "ব্যবহারিক-২: কি-বোর্ডের মাধ্যমে গৃহীত সেন্টিগ্রেড স্কেলের তাপমাত্রাকে ফারেনহাইট স্কেলে প্রকাশের জন্য প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    float c,f;\n    printf(\"Enter Centigrade Scale Temparature:\");\n    scanf(\"%f\",&c);\n    f=((9*c)/5)+32;\n    printf(\"\\nFahrenhite Scale Temparature=%f\",f);\n    return 0;\n}",
  "note": "**ফলাফল (Output):**\n> Enter Centigrade Scale Temperature: 100\n> Fahrenhite Scale Temperature=212.000000",
  "issue": ""
 },
 {
  "id": "P3",
  "title": "ত্রিভুজের ক্ষেত্রফল (½ × ভূমি × উচ্চতা)",
  "part": 1,
  "cluster": "A",
  "pattern": "সরাসরি সূত্র",
  "diff": "সহজ",
  "imp": "মাঝারি",
  "stmt": "ব্যবহারিক-৩: ত্রিভুজের ক্ষেত্রফল নির্ণয়ের জন্য 'সি' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    float b, h, area;\n    printf(\"Type base of a Triangle:\");\n    scanf(\"%f\", &b);\n    printf(\"Type height of a Triangle:\");\n    scanf(\"%f\", &h);\n    area = 1.0/2*b*h;\n    printf(\"Area of a Triangle %.2f\", area);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P4",
  "title": "বৃত্তের ক্ষেত্রফল (#define Pie)",
  "part": 1,
  "cluster": "A",
  "pattern": "সরাসরি সূত্র",
  "diff": "সহজ",
  "imp": "মাঝারি",
  "stmt": "ব্যবহারিক-৪: বৃত্তের ক্ষেত্রফল নির্ণয়ের জন্য 'সি' ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\n#define Pie 3.1416\nint main()\n{\n    float r, a;\n    printf(\"Radius:\");\n    scanf(\"%f\", &r);\n    a = Pie * r * r;\n    printf(\"Area = %f \\n\", a);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P5",
  "title": "আয়তক্ষেত্রের ক্ষেত্রফল",
  "part": 1,
  "cluster": "A",
  "pattern": "সরাসরি সূত্র",
  "diff": "সহজ",
  "imp": "মাঝারি",
  "stmt": "ব্যবহারিক-৫: আয়তক্ষেত্রের ক্ষেত্রফল নির্ণয়ের জন্য 'সি' ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int l, w, area;\n    printf(\"Type length of a rectangle:\");\n    scanf(\"%d\", &l);\n    printf(\"Type width of a rectangle:\");\n    scanf(\"%d\", &w);\n    area=l*w;\n    printf(\"\\n Area of a Rectangle: %d\", area);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P6",
  "title": "ছোট হাতের অক্ষর থেকে বড় হাতের",
  "part": 1,
  "cluster": "B",
  "pattern": "লাইব্রেরি ফাংশন (ctype: toupper)",
  "diff": "সহজ",
  "imp": "নিম্ন-মাঝারি",
  "stmt": "ব্যবহারিক-৬: ব্যবহারকারী প্রদত্ত ছোট হাতের অক্ষরকে বড় হাতের অক্ষরে রূপান্তরের জন্য 'সি' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\n#include<ctype.h>\nint main()\n{\n    char ch;\n    printf(\"Enter any lower case character:\");\n    scanf(\"%c\", &ch);\n    printf(\"You entered : %c\", toupper(ch));\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P7",
  "title": "বড় হাতের অক্ষর থেকে ছোট হাতের",
  "part": 1,
  "cluster": "B",
  "pattern": "লাইব্রেরি ফাংশন (ctype: tolower)",
  "diff": "সহজ",
  "imp": "নিম্ন-মাঝারি",
  "stmt": "ব্যবহারিক-৭: ব্যবহারকারী প্রদত্ত বড় হাতের অক্ষরকে ছোট হাতের অক্ষরে রূপান্তরের জন্য 'সি' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\n#include<ctype.h>\nint main()\n{\n    char ch;\n    printf(\"Enter any Upper case character:\");\n    scanf(\"%c\", &ch);\n    printf(\"You entered : %c\", tolower(ch));\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P9",
  "title": "২টি সংখ্যার মধ্যে ছোটটি",
  "part": 1,
  "cluster": "C",
  "pattern": "নির্বাচন (if-else)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-৯: কি-বোর্ডের মাধ্যমে ইনপুটকৃত ২টি সংখ্যার মধ্যে ছোট সংখ্যাটি নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int a, b;\n    printf(\"Enter 1st Number:\");\n    scanf(\"%d\", &a);\n    printf(\"Enter 2nd Number:\");\n    scanf(\"%d\", &b);\n    if(a<b)\n        printf(\"lowest No. is=%d\", a);\n    else\n        printf(\"lowest No. is=%d\", b);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P10",
  "title": "জোড় না বিজোড়",
  "part": 1,
  "cluster": "D",
  "pattern": "মডুলো পরীক্ষা",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-১০: একটি সংখ্যা জোড় না বিজোড় তা নির্ণয় করার জন্য সি ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int x,y;\n    // clrscr();\n    printf(\"Enter a Number:\");\n    scanf(\"%d\", &x);\n    y=x%2;\n    if(y==0)\n    {\n        printf(\"\\nYou entered an even number\");\n        printf(\"\\nand the number is %d\", x);\n    }\n    else\n    {\n        printf(\"\\nYou entered an odd number\");\n        printf(\"\\nand the number is %d\", x);\n    }\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P11",
  "title": "৩টি সংখ্যার মধ্যে বড়টি",
  "part": 1,
  "cluster": "C",
  "pattern": "নির্বাচন (if / else-if)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-১১: তিনটি সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যাটি নির্ণয় করার জন্য সি ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int a,b,c;\n    printf(\"Type three numbers:\");\n    scanf(\"%d %d %d\", &a, &b, &c);\n    if(a>b && a>c)\n        printf(\"Highest No is =%d\", a);\n    else if(b>a && b>c)\n        printf(\"Highest No is=%d\", b);\n    else\n        printf(\"Highest No is=%d\", c);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P12",
  "title": "ধনাত্মক না ঋণাত্মক",
  "part": 1,
  "cluster": "C",
  "pattern": "নির্বাচন (if-else)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-১২: একটি সংখ্যা ধনাত্মক না ঋণাত্মক তা নির্ণয় করার জন্য সি ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int n;\n    printf(\"Type Number:\");\n    scanf(\"%d\", &n);\n    if(n >= 0)\n        printf(\"Number is Positive\");\n    else\n        printf(\"Number is Negative\");\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P13",
  "title": "লিপইয়ার",
  "part": 1,
  "cluster": "D",
  "pattern": "মডুলো পরীক্ষা (যৌগিক শর্ত)",
  "diff": "মাঝারি",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-১৩: কোনো একটি বর্ষ লিপইয়ার কিনা তা নির্ণয় করার জন্য সি ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int year;\n    scanf(\"%d\", &year);\n    if((year%400 == 0) || (year%100 != 0) && (year%4 == 0))\n        printf(\"%d is a leap year.\\n\", year);\n    else\n        printf(\"%d is not a leap year.\\n\", year);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "Calc",
  "title": "switch-case ক্যালকুলেটর (+ − × ÷)",
  "part": 1,
  "cluster": "E",
  "pattern": "নির্বাচন (switch)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "উদাহরণ: switch case স্টেটমেন্ট ব্যবহার করে ২টি সংখ্যার যোগ, বিয়োগ, গুণ, ভাগ করতে পারে এমন একটি ক্যালকুলেটর তৈরি কর।",
  "code": "#include<stdio.h>\nint main()\n{\n    char o;\n    float num1, num2;\n    printf(\"Enter operator either + or - or * or /: \");\n    scanf(\"%c\", &o);\n    printf(\"Enter two operands : \");\n    scanf(\"%f %f\", &num1, &num2);\n    \n    switch(o) {\n        case '+':\n            printf(\"%.1f + %.1f = %.1f\", num1, num2, num1 + num2);\n            break;\n        case '-':\n            printf(\"%.1f - %.1f = %.1f\", num1, num2, num1 - num2);\n            break;\n        case '*':\n            printf(\"%.1f * %.1f = %.1f\", num1, num2, num1 * num2);\n            break;\n        case '/':\n            printf(\"%.1f / %.1f = %.1f\", num1, num2, num1 / num2);\n            break;\n        default:\n            /* If operator is other than +, -, * or /, error message is shown */\n            printf(\"Error! operator is not correct\");\n            break;\n    }\n    return 0;\n}",
  "note": "",
  "issue": "নম্বর নেই। শূন্য দিয়ে ভাগের কোনো যাচাই নেই।"
 },
 {
  "id": "Vowel-1",
  "title": "স্বরবর্ণ না ব্যঞ্জনবর্ণ (else-if)",
  "part": 2,
  "cluster": "D",
  "pattern": "নির্বাচন (if / else-if)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "একটি অক্ষর (Character) স্বরবর্ণ না ব্যঞ্জনবর্ণ (Vowel or Consonant) তা নির্ণয়ের জন্য C ভাষায় প্রোগ্রাম লেখ। [else if statement ব্যবহার করে]",
  "code": "#include<stdio.h>\nint main()\n{\n    char Vc;\n    printf(\"\\n\\n\\tEnter the Letter:\");\n    scanf(\"%c\", &Vc);\n    printf(\"\\n\\n\\tYou Have Entered: %c\", Vc);\n    if(Vc == 'A' || Vc == 'a')\n        printf(\"\\n\\tThe letter you entered is Vowel\");\n    else if(Vc == 'E' || Vc == 'e')\n        printf(\"\\n\\tThe letter you entered is Vowel\");\n    else if(Vc == 'I' || Vc == 'i')\n        printf(\"\\n\\tThe letter you entered is Vowel\");\n    else if(Vc == 'O' || Vc == 'o')\n        printf(\"\\n\\tThe letter you entered is Vowel\");\n    else if(Vc == 'U' || Vc == 'u')\n        printf(\"\\n\\tThe letter you entered is Vowel\");\n    else\n        printf(\"\\n\\tThe letter you entered is Consonant\");\n    return 0;\n}",
  "note": "",
  "issue": "নম্বর নেই।"
 },
 {
  "id": "Vowel-2",
  "title": "স্বরবর্ণ না ব্যঞ্জনবর্ণ (switch)",
  "part": 2,
  "cluster": "E",
  "pattern": "নির্বাচন (switch, fall-through)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "একটি অক্ষর (Character) স্বরবর্ণ না ব্যঞ্জনবর্ণ (Vowel or Consonant) তা নির্ণয়ের জন্য C ভাষায় প্রোগ্রাম লেখ। [switch case statement ব্যবহার করে]",
  "code": "#include <stdio.h>\nint main()\n{\n    char vc;\n    printf(\"Enter the character to check:\");\n    scanf(\"%c\", &vc);\n    switch (vc)\n    {\n        case 'a':\n        case 'A':\n        case 'e':\n        case 'E':\n        case 'i':\n        case 'I':\n        case 'o':\n        case 'O':\n        case 'u':\n        case 'U':\n            printf(\"Vowel\");\n            break;\n        default:\n            printf(\"Consonant\");\n            break;\n    }\n    return 0;\n}",
  "note": "",
  "issue": "নম্বর নেই।"
 },
 {
  "id": "P14",
  "title": "২টি সংখ্যার ধনাত্মক বিয়োগফল",
  "part": 2,
  "cluster": "C",
  "pattern": "নির্বাচন (if-else)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-১৪: দুটি ধনাত্মক পূর্ণ সংখ্যার বিয়োগফল নির্ণয় করার C ভাষায় একটি প্রোগ্রাম লেখ যেখানে বিয়োগফল সবসময় ধনাত্মক পূর্ণ সংখ্যা হবে।",
  "code": "#include<stdio.h>\nint main()\n{\n    int a, b, x;\n    printf(\"Enter 1st Number:\");\n    scanf(\"%d\", &a);\n    printf(\"Enter 2nd Number:\");\n    scanf(\"%d\", &b);\n    if(a>b)\n        x=a-b;\n    else\n        x=b-a;\n    printf(\"Difference Between two Number is=%d\", x);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P15",
  "title": "ধনাত্মক, ঋণাত্মক না শূন্য",
  "part": 2,
  "cluster": "C",
  "pattern": "নির্বাচন (if / else-if)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-১৫: একটি সংখ্যা ধনাত্মক, ঋণাত্মক না শূন্য তা নির্ণয় করার জন্য C ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int n;\n    printf(\"Type Number:\");\n    scanf(\"%d\", &n);\n    if(n == 0)\n        printf(\"Number is Zero\");\n    else if (n > 0)\n        printf(\"Number is Positive\");\n    else\n        printf(\"Number is Negative\");\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P16",
  "title": "৩টি সংখ্যার মধ্যে ছোটটি",
  "part": 2,
  "cluster": "C",
  "pattern": "নির্বাচন (if / else-if)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-১৬: তিনটি সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যাটি নির্ণয় করার জন্য C ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int a,b,c;\n    printf(\"Type three numbers:\");\n    scanf(\"%d %d %d\", &a, &b, &c);\n    if(a<b && a<c)\n        printf(\"Lowest No is =%d\", a);\n    else if(b<a && b<c)\n        printf(\"Lowest No is=%d\", b);\n    else\n        printf(\"Lowest No is=%d\", c);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "Loops",
  "title": "for / while / do-while উদাহরণ",
  "part": 2,
  "cluster": "I",
  "pattern": "লুপের ধারণা",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "Loop (লুপ) স্টেটমেন্ট উদাহরণ",
  "code": "for loop উদাহরণ\nfor (i=1; i<=50; ++i)\n{\n    printf(\"Abdur Rahman Haque\");\n}\n// Abdur Rahman Haque লেখাটি ৫০ বার মনিটরে প্রদর্শিত হবে।\n\nwhile loop উদাহরণ\nint i=5;\nwhile (i<=4)\n{\n    printf(\"Rubaiya Haque Jaara\");\n    ++i;\n}\n// Note: যেহেতু শর্ত পূরণ হচ্ছে না তাই কোনো লুপ হবে না অর্থাৎ Rubaiya Haque Jaara কথাটি মনিটরে প্রদর্শিত হবে না।\n\ndo-while loop উদাহরণ\nint i=5;\ndo\n{\n    printf(\"Rubaiya Haque Jaara\");\n} while (i!=5);\n// Note: do-while লুপ তখনই ব্যবহার করা উচিত যখন অন্ততপক্ষে একবার স্টেটমেন্ট এক্সিকিউট করার প্রয়োজন রয়েছে।",
  "note": "",
  "issue": "শুধু ধারণা, পূর্ণ প্রোগ্রাম নয়।"
 },
 {
  "id": "Continue",
  "title": "continue উদাহরণ (ICT ৯ বার ছাপে)",
  "part": 2,
  "cluster": "I",
  "pattern": "এড়িয়ে যাওয়া (continue)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "continue control statement (from: Control Statements)",
  "code": "for (i=1; i<=10; i++)\n{\n    if (i==5)\n        continue;\n    printf(\"ICT\");\n}\n// ICT লেখাটি ৯ বার প্রদর্শিত হবে। কারণ যখন i এর মান 5 হবে তখন ICT লেখাটি প্রদর্শিত না হয়ে লুপের প্রথমে কন্ট্রোলটি চলে যাবে।",
  "note": "",
  "issue": ""
 },
 {
  "id": "Break",
  "title": "break উদাহরণ (ICT ৪ বার ছাপে)",
  "part": 2,
  "cluster": "I",
  "pattern": "আগে বের হওয়া (break)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "break control statement (from: Control Statements)",
  "code": "for (i=1; i<=10; i++)\n{\n    if (i==5)\n        break;\n    printf(\"ICT\");\n}\n// ICT লেখাটি 4 বার প্রদর্শিত হবে। যখন i এর মান 5 হবে তখন কন্ট্রোল লুপ এর বাহিরে চলে আসবে।",
  "note": "",
  "issue": ""
 },
 {
  "id": "Goto",
  "title": "goto উদাহরণ (১ থেকে ১০ ছাপা)",
  "part": 2,
  "cluster": "I",
  "pattern": "আগে বের হওয়া / লাফ (goto)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "goto statement (from: Control Statements)",
  "code": "#include <stdio.h>\n// function to print numbers from 1 to 10\nvoid printNumbers()\n{\n    int n = 1;\nlabel:\n    printf(\"%d \", n);\n    n++;\n    if (n <= 10)\n        goto label;\n}\n\n// Driver program to test above function\nint main()\n{\n    printNumbers();\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P19",
  "title": "যোগফল 1²+3²+5²+...+N²",
  "part": 2,
  "cluster": "F",
  "pattern": "সঞ্চয়ক (sum += ...)",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "ব্যবহারিক-১৯: 1²+3²+5²+...+N² সিরিজের যোগফল নির্ণয় করার 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\n#include<math.h> // Assuming math.h is needed for pow()\nint main()\n{\n    int i, sum, n;\n    printf(\"Enter the value of n=\");\n    scanf(\"%d\", &n);\n    sum=0;\n    for(i=1; i<=n; i=i+2)\n        sum=sum+pow(i,2); // Replaced i*i logic with pow based on image context\n    printf(\"\\n\\tSum of all numbers from 1 to %d is = %d\", n, sum);\n    return 0;\n}",
  "note": "",
  "issue": "আউটপুট বার্তায় '1 থেকে n' লেখা, কিন্তু কোড শুধু বিজোড় সংখ্যার বর্গের যোগফল করে।"
 },
 {
  "id": "P20",
  "title": "1..N এর মধ্যে জোড় ও বিজোড় গণনা",
  "part": 2,
  "cluster": "G",
  "pattern": "গণক + মডুলো",
  "diff": "মাঝারি",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-২০: 1+2+3+...+N সিরিজের মধ্যে কতটি সংখ্যা জোড় এবং কতটি সংখ্যা বিজোড় তা নির্ণয় করার প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i, Odd=0, Even=0, N;\n    // clrscr();\n    printf(\"Enter value for N=\");\n    scanf(\"%d\", &N);\n    for(i=1; i<=N; i++) {\n        if(i%2==0)\n        {\n            Even+=1;\n        }\n        else\n        {\n            Odd+=1;\n        }\n    }\n    printf(\"\\n\\tTotal Even Number is = %d\", Even);\n    printf(\"\\n\\tTotal Odd Number is = %d\", Odd);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P21",
  "title": "১০টি সংখ্যার যোগফল (for / do-while / while)",
  "part": 2,
  "cluster": "F",
  "pattern": "সঞ্চয়ক (sum += ...)",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "ব্যবহারিক-২১: ১০টি সংখ্যার যোগফল নির্ণয়ের জন্য C ভাষায় প্রোগ্রাম লেখ।",
  "code": "[for loop ব্যবহার করে]\n#include<stdio.h>\nint main()\n{\n    int i,x,sum=0;\n    for(i=1; i<=10; i++)\n    {\n        printf(\"Type Number:\");\n        scanf(\"%d\",&x);\n        sum=sum+x;\n    }\n    printf(\"Summation is =%d\", sum);\n    return 0;\n}\n\n[do while loop ব্যবহার করে]\n#include<stdio.h>\nint main()\n{\n    int x,sum=0, i = 1;\n    do\n    {\n        printf(\"Type Number:\");\n        scanf(\"%d\",&x);\n        sum=sum+x;\n        i++;\n    } while(i<=10);\n    printf(\"Summation is =%d\", sum);\n    return 0;\n}\n\n[while loop ব্যবহার করে]\n#include<stdio.h>\nint main()\n{\n    int x,sum=0,i = 1;\n    while(i<=10)\n    {\n        printf(\"Type Number:\");\n        scanf(\"%d\",&x);\n        sum=sum+x;\n        i++;\n    }\n    printf(\"Summation is =%d\", sum);\n    return 0;\n}",
  "note": "*(একই প্রোগ্রাম for loop, do while loop ও while loop ব্যবহার করে দেখানো হলো)*",
  "issue": ""
 },
 {
  "id": "P22",
  "title": "১০টি সংখ্যার মধ্যে বড়টি (অ্যারে)",
  "part": 3,
  "cluster": "J",
  "pattern": "চলমান সর্বোচ্চ",
  "diff": "মাঝারি",
  "imp": "মাঝারি-উচ্চ",
  "stmt": "ব্যবহারিক-২২: কি-বোর্ডের মাধ্যমে গৃহীত ১০টি সংখ্যার মধ্যে বড় সংখ্যাটি নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i, j, h;\n    int number[10];\n    for (i=0; i<=9; i++)\n    {\n        printf(\"Enter your number =\");\n        scanf(\"%d\", &number[i]);\n    }\n    h=number[0];\n    for(j=1; j<=9; j++)\n    {\n        if(h<number[j])\n        {\n            h=number[j];\n        }\n    }\n    printf(\"\\n\\tThe highest number is = %d\", h);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P23",
  "title": "ফ্যাক্টোরিয়াল",
  "part": 3,
  "cluster": "H",
  "pattern": "পুনরাবৃত্ত গণনা (গুণফল)",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "ব্যবহারিক-২৩: একটি ধনাত্মক পূর্ণ সংখ্যার ফ্যাক্টোরিয়াল নির্ণয় করার জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int f=1, x;\n    printf(\"Enter number =\");\n    scanf(\"%d\", &x);\n    if(x==0)\n    {\n        f=1;\n    }\n    else\n    {\n        do\n        {\n            f=f*x;\n            x=x-1;\n        }while(x>1);\n    }\n    printf(\"\\n\\tFactorial value = %d\", f);\n    return 0;\n}",
  "note": "",
  "issue": "int ১২!-এর বেশি হলে ওভারফ্লো করে।"
 },
 {
  "id": "P24",
  "title": "১ থেকে ১০ ছাপা",
  "part": 3,
  "cluster": "I",
  "pattern": "সাধারণ লুপ",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-২৪: ১ থেকে ১০ পর্যন্ত সংখ্যাগুলো প্রদর্শনের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i;\n    for(i=1; i<=10; i++)\n    {\n        printf(\"\\n%d \", i);\n    }\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P25",
  "title": "১০টি সংখ্যার মধ্যে ধনাত্মক ও ঋণাত্মক গণনা",
  "part": 3,
  "cluster": "G",
  "pattern": "গণক",
  "diff": "মাঝারি",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-২৫: দশটি সংখ্যার মধ্যে কতটি সংখ্যা ধনাত্মক এবং কতটি সংখ্যা ঋণাত্মক তা নির্ণয় করার জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i, p=0, n=0, x;\n    for(i=1; i<=10; i++) {\n        printf(\"Enter value for x=\");\n        scanf(\"%d\", &x);\n        if(x>=0)\n        {\n            p+=1;\n        }\n        else\n        {\n            n+=1;\n        }\n    }\n    printf(\"\\n\\tTotal Positive Number is = %d\", p);\n    printf(\"\\n\\tTotal Negative Number is = %d\", n);\n    return 0;\n}",
  "note": "",
  "issue": "০ কে ধনাত্মক গোনে।"
 },
 {
  "id": "P26",
  "title": "১০টি সংখ্যার মধ্যে জোড় ও বিজোড় গণনা",
  "part": 3,
  "cluster": "G",
  "pattern": "গণক + মডুলো",
  "diff": "মাঝারি",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-২৬: দশটি সংখ্যার মধ্যে কতটি সংখ্যা জোড় এবং কতটি সংখ্যা বিজোড় তা নির্ণয় করার জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i, Odd=0, Even=0, x, y;\n    for(i=1; i<=10; i++) {\n        printf(\"Enter value for x=\");\n        scanf(\"%d\", &x);\n        y=x%2;\n        if(y==0)\n        {\n            Even+=1;\n        }\n        else\n        {\n            Odd+=1;\n        }\n    }\n    printf(\"\\n\\tTotal Even Number is = %d\", Even);\n    printf(\"\\n\\tTotal Odd Number is = %d\", Odd);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P27",
  "title": "২টি সংখ্যার গ.সা.গু",
  "part": 3,
  "cluster": "H",
  "pattern": "ইউক্লিডের অ্যালগরিদম",
  "diff": "কঠিন",
  "imp": "অতি উচ্চ",
  "stmt": "ব্যবহারিক-২৭: কি-বোর্ডের মাধ্যমে গৃহীত ২টি ধনাত্মক পূর্ণসংখ্যার গ.সা.গু মান নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int h, l, t;\n    printf(\"Enter highest number =\");\n    scanf(\"%d\", &h);\n    printf(\"Enter lowest number =\");\n    scanf(\"%d\", &l);\n    do\n    {\n        t=h%l;\n        h=l;\n        l=t;\n    }while(l!=0);\n    printf(\"\\n\\tGCD (Greatest Common Divisor) is = %d\", h);\n    return 0;\n}",
  "note": "",
  "issue": "কোনো ইনপুট ০ হলে ভেঙে যায়।"
 },
 {
  "id": "P28",
  "title": "২টি সংখ্যার ল.সা.গু",
  "part": 3,
  "cluster": "H",
  "pattern": "ব্রুট-ফোর্স ল.সা.গু (goto)",
  "diff": "কঠিন",
  "imp": "অতি উচ্চ",
  "stmt": "ব্যবহারিক-২৮: কি-বোর্ডের মাধ্যমে গৃহীত ২টি ধনাত্মক পূর্ণ সংখ্যার ল.সা.গু নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int x, y, l;\n    printf(\"Type Numbers \");\n    scanf(\"%d %d\", &x, &y);\n    if(x>y)\n        l=x;\n    else\n        l=y;\nagain:\n    if(l%x == 0 && l%y == 0)\n        printf(\"LCM is =%d\", l);\n    else\n    {\n        l = l+1;\n        goto again;\n    }\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P29",
  "title": "গ.সা.গু ও ল.সা.গু একসাথে",
  "part": 3,
  "cluster": "H",
  "pattern": "ইউক্লিডের অ্যালগরিদম (ল.সা.গু = a×b/গ.সা.গু)",
  "diff": "কঠিন",
  "imp": "অতি উচ্চ",
  "stmt": "ব্যবহারিক-২৯: কি-বোর্ডের মাধ্যমে গৃহীত ২টি ধনাত্মক পূর্ণসংখ্যার গসাগু ও লসাগু মান নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int l, s, z, t, Y;\n    printf(\"Enter highest number =\");\n    scanf(\"%d\", &l);\n    printf(\"Enter lowest number =\");\n    scanf(\"%d\", &s);\n    z = l * s;\n    do\n    {\n        t=l%s;\n        l=s;\n        s=t;\n    }while(s!=0);\n    Y= z/l;\n    printf(\"\\n\\tGCD (Greatest Common Divisor) is = %d\", l);\n    printf(\"\\n\\tLCM is =%d\", Y);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P30",
  "title": "প্রাইম সংখ্যা যাচাই",
  "part": 3,
  "cluster": "D",
  "pattern": "ভাগ দিয়ে পরীক্ষা, আগেই break",
  "diff": "মাঝারি",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-৩০: একটি সংখ্যা প্রাইম নাম্বার কিনা তা নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int A, N, count=0;\n    printf(\"Enter the Integer Number to check Prime or Not:\");\n    scanf(\"%d\", &N);\n    for(A=2; A<=N/2; A++)\n    {\n        if((N%A)==0)\n        {\n            count=1;\n            break;\n        }\n    }\n    if(N == 2 || count==0)\n        printf(\"%d is a Prime Number\", N);\n    else\n        printf(\"%d is Not a Prime Number\", N);\n    return 0;\n}",
  "note": "",
  "issue": "০ ও ১ কে প্রাইম দেখায়।"
 },
 {
  "id": "P31",
  "title": "ধারা 1+2+3+...+N",
  "part": 3,
  "cluster": "F",
  "pattern": "সঞ্চয়ক (sum += ...)",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "ব্যবহারিক-৩১: 1 + 2 + 3 +...+ N ধারাটি ফলাফল হিসেবে প্রদানের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i, n;\n    printf(\"Enter the value of n=\");\n    scanf(\"%d\", &n);\n    for(i=1; i<=n; i++)\n        printf(\"%d +\", i);\n    printf(\"\\b\\b \");\n    printf(\". \");\n    return 0;\n}",
  "note": "",
  "issue": "শুধু ধারাটি ছাপে; যোগফল হিসাব করে না।"
 },
 {
  "id": "P32",
  "title": "ফিবোনাচ্চি ধারা",
  "part": 3,
  "cluster": "H",
  "pattern": "পুনরাবৃত্ত গণনা (t1, t2)",
  "diff": "কঠিন",
  "imp": "অতি উচ্চ",
  "stmt": "ব্যবহারিক-৩২: 0 থেকে n পর্যন্ত সকল Fibonacci সংখ্যা নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int count, n, t1=0, t2=1, display=0;\n    printf(\"Enter number of terms: \");\n    scanf(\"%d\", &n);\n    printf(\"Fibonacci Series: %d, %d, \", t1, t2); /* Displaying first two terms */\n    count=2; /* count=2 because first two terms are already displayed. */\n    while(count<n)\n    {\n        display=t1+t2;\n        t1=t2;\n        t2=display;\n        ++count;\n        printf(\"%d, \", display);\n    }\n    printf(\"\\b\\b \");\n    return 0;\n}",
  "note": "",
  "issue": "সবসময় অন্তত ২টি পদ ছাপে; '0 থেকে n' নয়, n সংখ্যক পদ ছাপে।"
 },
 {
  "id": "P33",
  "title": "২০০–৫০০ এর মধ্যে ৭-এর বিজোড় গুণিতকের যোগফল",
  "part": 3,
  "cluster": "F",
  "pattern": "সঞ্চয়ক + মডুলো",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "ব্যবহারিক-৩৩: 200 থেকে 500 পর্যন্ত সকল সংখ্যার মধ্যে যেসব সংখ্যা 7 এর গুণিতক এবং বিজোড় সংখ্যা তাদের যোগফল নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i, start=200, end=500, sum=0;\n    for(i=start; i<=end; i++)\n    {\n        if(i%7==0 && i%2!=0)\n        {\n            printf(\"%d\\n\", i);\n            sum=sum+i;\n        }\n    }\n    printf(\"\\n===\");\n    printf(\"\\n%d\", sum);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P34a",
  "title": "'Bangladesh' ১০ বার ছাপা",
  "part": 3,
  "cluster": "I",
  "pattern": "সাধারণ লুপ",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-৩৪(ক): Bangladesh লেখাটিকে দশবার প্রদর্শনের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i;\n    for(i=1; i<=10; i++)\n    {\n        printf(\"Bangladesh \\n\");\n    }\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P34b",
  "title": "নিজের নাম ১০ বার ছাপা",
  "part": 3,
  "cluster": "I",
  "pattern": "সাধারণ লুপ",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-৩৪(খ): তোমার নামকে দশবার প্রদর্শনের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i; char sname[30];\n    printf(\"Type Your Name:\");\n    scanf(\"%s\", &sname);\n    for(i=1; i<=10; i++)\n    {\n        printf(\"\\n Your Name is = %s\", sname);\n    }\n    return 0;\n}",
  "note": "",
  "issue": "scanf(\"%s\", &sname)-এ & ঠিক নয়; sname লিখতে হবে।"
 },
 {
  "id": "P35",
  "title": "continue দিয়ে ১–১০ এর বিজোড় সংখ্যা ছাপা",
  "part": 3,
  "cluster": "I",
  "pattern": "এড়িয়ে যাওয়া (continue)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-৩৫: continue স্টেটমেন্ট ব্যবহার করে ১ থেকে ১০ পর্যন্ত সংখ্যাগুলোর মধ্যে বিজোড় সংখ্যাগুলো প্রদর্শন করার জন্য 'C' ভাষায় প্রোগ্রাম লিখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i;\n    for(i=1; i<=10; i++)\n    {\n        if(i%2==0)\n            continue;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "P36",
  "title": "break উদাহরণ",
  "part": 3,
  "cluster": "I",
  "pattern": "আগে বের হওয়া (break)",
  "diff": "সহজ",
  "imp": "উচ্চ",
  "stmt": "ব্যবহারিক-৩৬: break স্টেটমেন্ট ব্যবহার করে 'C' ভাষায় ১টি প্রোগ্রাম লিখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i;\n    for(i=1; i<=10; i++)\n    {\n        if(i==5)\n            break;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "Ex-131",
  "title": "131+133+135+...+N এর যোগফল",
  "part": 3,
  "cluster": "F",
  "pattern": "সঞ্চয়ক (sum += ...)",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদাহরণ: 131+133+135+...+N সিরিজের যোগফল নির্ণয়ের জন্য 'সি' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\nint main()\n{\n    int i, sum, n;\n    printf(\"Enter the value of n=\");\n    scanf(\"%d\", &n);\n    sum=0;\n    for(i=131; i<=n; i=i+2)\n        sum = sum + i;\n    printf(\"Sum of all odd numbers from 131 to %d is = %d\", n, sum);\n    return 0;\n}",
  "note": "",
  "issue": "নম্বর নেই।"
 },
 {
  "id": "P37",
  "title": "৫টি পূর্ণসংখ্যার অ্যারে: ইনপুট ও আউটপুট",
  "part": 4,
  "cluster": "J",
  "pattern": "অ্যারে ট্রাভার্সাল",
  "diff": "মাঝারি",
  "imp": "মাঝারি-উচ্চ",
  "stmt": "ব্যবহারিক-৩৭: অ্যারে ব্যবহার করে পাঁচটি পূর্ণসংখ্যার যোগফল নির্ণয়ের জন্য 'C' ভাষায় একটি প্রোগ্রাম লেখ।",
  "code": "বইয়ের ছবিতে অ্যারের মানগুলো সরাসরি দিয়ে যোগ করার বিকল্প নিয়মটি দেওয়া হলো\n// Alternate way:\n#include<stdio.h>\nint main()\n{\n    int i;\n    int mark[5] = {19, 10, 8, 17, 9};\n    for(i=0; i<5; i++)\n    {\n        printf(\"Value of mark[%d] is %d \\n\", i, mark[i]);\n    }\n    return 0;\n}\n\nব্যবহারকারীর কাছ থেকে ইনপুট নিয়ে যোগ করার নিয়ম\n#include<stdio.h>\nint main()\n{\n    int mark[5];\n    int i;\n    printf(\"\\t Enter values for array element : \");\n    for(i=0; i<5; i++)\n    {\n        scanf(\"%d\", &mark[i]);\n    }\n    for(i=0; i<5; i++)\n    {\n        printf(\"Value of mark[%d] is %d \\n\", i, mark[i]);\n    }\n    return 0;\n}",
  "note": "*(বইয়ের ছবিতে দেখা যায়, ব্যবহারিক-৩৭-এর কোডে অ্যারের উপাদান যোগ করার যুক্তি নেই; শুধু ইনপুট ও আউটপুট দেখানো হয়েছে।)*",
  "issue": "শিরোনামে যোগফল, কিন্তু কোড শুধু অ্যারের উপাদান ছাপে।"
 },
 {
  "id": "P38",
  "title": "ফাংশন দিয়ে ২টি সংখ্যার যোগফল",
  "part": 4,
  "cluster": "K",
  "pattern": "ফাংশনে ভাগ (প্রোটোটাইপ, কল, সংজ্ঞা)",
  "diff": "মাঝারি",
  "imp": "মাঝারি",
  "stmt": "ব্যবহারিক-৩৮: ফাংশন ব্যবহার করে ২টি সংখ্যার যোগফল নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>            --------> (Header Files)\nint sum(int i, int j);       --------> (Prototype Declaration)\nint main( )                  --------> (Library Function)\n{\n    int x, y;                --------> (Variable Declaration)\n    printf(\"Enter 1st value =\");\n    scanf(\"%d\", &x);\n    printf(\"Enter 2nd value =\");\n    scanf(\"%d\", &y);\n    \n    // Function Calling\n    sum(x, y); \n}\n\n// Function Definition\nint sum(int i, int j)\n{\n    int total;\n    total = i+j;\n    printf(\"\\n\\n\\t%d+%d=%d\", i,j,total);\n}",
  "note": "",
  "issue": "int ফাংশনে return নেই।"
 },
 {
  "id": "P39",
  "title": "ফাংশন দিয়ে ত্রিভুজের ক্ষেত্রফল (হেরন)",
  "part": 4,
  "cluster": "K",
  "pattern": "ফাংশনে ভাগ + math লাইব্রেরি",
  "diff": "মাঝারি",
  "imp": "মাঝারি",
  "stmt": "ব্যবহারিক-৩৯: ফাংশন ব্যবহার করে ত্রিভুজের ক্ষেত্রফল নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\n#include<math.h>\ndouble area( int a, int b, int c );\nint main( )\n{\n    int a, b, c;\n    printf(\"Enter value of side A: \");\n    scanf(\"%d\", &a);\n    printf(\"Enter value of side B: \");\n    scanf(\"%d\", &b);\n    printf(\"Enter value of side C: \");\n    scanf(\"%d\", &c);\n    \n    printf(\"\\nThe area of the triangle is: %f\", area(a, b, c));\n    return 0;\n}\n\ndouble area( int a, int b, int c )\n{\n    double y;\n    int s;\n    s = (a + b + c)/2;\n    y = sqrt( s * (s - a)*(s - b)*(s - c) );\n    return(y);\n}",
  "note": "",
  "issue": "int s ভগ্নাংশ কেটে দেয়; double s ব্যবহার করো।"
 },
 {
  "id": "P40",
  "title": "স্ট্রিংয়ের দৈর্ঘ্য (strlen)",
  "part": 4,
  "cluster": "L",
  "pattern": "লাইব্রেরি ফাংশন (string.h)",
  "diff": "মাঝারি",
  "imp": "নিম্ন-মাঝারি",
  "stmt": "ব্যবহারিক-৪০: একটি স্ট্রিং এ বিদ্যমান কতটি অক্ষর রয়েছে তা নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include <stdio.h>\n#include <string.h>\n\nint main()\n{\n    // declare and initialize string\n    char str[] = \"Birshreshtha\";\n    int length = 0;\n    length = strlen(str);\n    \n    // displaying the length of string\n    printf(\"Length of string str is %d\", length);\n    \n    return 0;\n}",
  "note": "**আউটপুট:**\n> Birshreshtha\n> Length of string str is 12\nলক্ষ্যণীয় যে, উপরের প্রোগ্রামটিতে `strlen` নামে একটি লাইব্রেরি ফাংশন ব্যবহার করা হয়েছে। এর কাজ হলো ইনপুট হিসেবে একটি স্ট্রিং নিবে এবং ফলাফল হিসেবে তার দৈর্ঘ্য প্রদান করবে। `strlen` লাইব্রেরি ফাংশনের হেডার ফাইল বা প্রোটোটাইপ হলো `#include<string.h>`।\nআরো লক্ষ্যণীয় যে, দুটি স্ট্রিং এর মধ্যে তুলনা করতে তথা স্ট্রিং দুটি সমান, নাকি ছোট, নাকি বড় তা নির্ণয় করতে `strcmp` নামে একটি লাইব্রেরি ফাংশন ব্যবহার করা হয়। এ ফাংশনটির কাজ হচ্ছে স্ট্রিং দুটি তুলনা করে সমান হলে 0 রিটার্ন করবে আর প্রথম স্ট্রিংটি বড় হলে +1 রিটার্ন করবে আর প্রথম স্ট্রিংটি ছোট হলে -1 রিটার্ন করবে। এখানে উল্লেখ থাকে যে, স্ট্রিং বড় বা ছোট মানে দৈর্ঘ্যে বড় বা ছোট নয় বরং লেক্সিকোগ্রাফিক্যালি (Lexicographically) বড় না ছোট তা বোঝানো হয়েছে। এর অর্থ হলো ডিকশনারি বা আভিধানিকক্রমে সাজালে যে স্ট্রিংটি সর্বপ্রথমে আসবে তা হলো ছোট আর যে স্ট্রিংটি সবার শেষে আসবে তা হলো বড়।",
  "issue": ""
 },
 {
  "id": "P41",
  "title": "স্ট্রিং তুলনা (strcmp)",
  "part": 4,
  "cluster": "L",
  "pattern": "লাইব্রেরি ফাংশন (string.h)",
  "diff": "মাঝারি",
  "imp": "নিম্ন-মাঝারি",
  "stmt": "ব্যবহারিক-৪১: একটি স্ট্রিং এর Lexicographically নির্ণয়ের জন্য 'C' ভাষায় প্রোগ্রাম লেখ।",
  "code": "#include<stdio.h>\n#include<string.h>\nint main()\n{\n    char str1[9];\n    char str2[9];\n    scanf(\"%s %s\", str1, str2);\n    \n    int result = strcmp(str1, str2);\n    \n    if (result==0)\n    {\n        printf(\"\\n\\n\\t%s and %s Strings are equal. \\n\", str1, str2);\n    }\n    else if (result>0)\n    {\n        printf(\"\\t%s is grater than %s. \\n\", str1, str2);\n    }\n    else\n    {\n        printf(\"\\t%s is smaller than %s. \\n\", str1, str2);\n    }\n    printf(\"\\n\\n\\tValue returned by strcmp() is: %d\" , result);\n    return 0;\n}",
  "note": "**আউটপুটের উদাহরণ (ছবি থেকে):**\n*   ইনপুট: `abudarda` `abudarda` → আউটপুট: `abudarda and abudarda Strings are equal.` (মান: 0)\n*   ইনপুট: `abu` `darda` → আউটপুট: `abu is smaller than darda.` (মান: -1)\n*   ইনপুট: `darda` `abu` → আউটপুট: `darda is grater than abu.` (মান: 1)",
  "issue": "৯ অক্ষরের বাফার ছোট।"
 },
 {
  "id": "S1",
  "title": "উদ্দীপক ১: for লুপে 'I love ICT' ছাপা",
  "part": 5,
  "cluster": "M",
  "pattern": "লুপ ট্রেস",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক প্রোগ্রাম ১ (লুপের ব্যবহার):",
  "code": "#include <stdio.h>\nint main()\n{\n    int a;\n    for (a = 1; a < 10; a++)\n    {\n        printf(\"I love ICT\");\n        printf(\"\\n\");\n    }\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "S2",
  "title": "উদ্দীপক ২: ধারা s = s + i",
  "part": 5,
  "cluster": "M",
  "pattern": "সঞ্চয়ক ট্রেস",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক প্রোগ্রাম ২ (ধারার যোগফল):",
  "code": "#include <stdio.h>\nint main ()\n{\n    int i, s;\n    s = 1;\n    for (i = 0; i <= 5; i = i + 2)\n    {\n        s = s + i;\n        printf(\"%d \\t\", s);\n    }\n    printf(\"\\n Result = %d\", s);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "S3",
  "title": "উদ্দীপক ৩: 10, 20, ..., 100 এর যোগফল",
  "part": 5,
  "cluster": "M",
  "pattern": "সঞ্চয়ক ট্রেস",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক প্রোগ্রাম ৩ (সমান্তর ধারা):",
  "code": "#include <stdio.h>\nmain ()\n{\n    int K, S = 0;\n    for (K = 10; K <= 100; K = K + 10)\n        S = S + K;\n    printf (\"summation %d\", S);\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "S-Alg1",
  "title": "অ্যালগরিদম: ৩টি সংখ্যার মধ্যে বড়টি",
  "part": 5,
  "cluster": "O",
  "pattern": "চলমান সর্বোচ্চ",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক অ্যালগরিদম (তিনটি সংখ্যার মধ্যে বড় সংখ্যা নির্ণয়):",
  "code": "Step 1: start\nStep 2: input a, b, c\nStep 3: max = a\nStep 4: if (max < b) max = b\nStep 5: if (max < c) max = c\nStep 6: print max\nStep 7: End",
  "note": "",
  "issue": ""
 },
 {
  "id": "S4",
  "title": "উদ্দীপক ৪: ১ থেকে n এর যোগফল (ভুলসহ)",
  "part": 5,
  "cluster": "N",
  "pattern": "ভুল খোঁজা (ডিবাগিং)",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক প্রোগ্রাম ৪ (১ থেকে n পর্যন্ত ধারার যোগফল):",
  "code": "#include <stdio.h>\nmain()\n{\n    int i, N, Sum=0;\n    printf(\"/nEnter 1st number of the series:\");\n    scanf(\"%d\", &N);\n    for (i = 1; i <= n; i = i + 1)\n        Sum = Sum + i;\n    printf(\"%d\", Sum);\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "S5",
  "title": "উদ্দীপক ৫: ধনাত্মক/শূন্য/ঋণাত্মক (ভুলসহ)",
  "part": 5,
  "cluster": "N",
  "pattern": "ভুল খোঁজা (ডিবাগিং)",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক প্রোগ্রাম ৫ (ভুল কোড সংশোধন সংক্রান্ত):",
  "code": "Note: This code snippet contains intentional errors as part of a question asking students to correct them\n#include <stdio.h>\nint main()\n{\n    float x;\n    printf(\"Type Number\");\n    scanf(\"%d\" & x);\n    if (x=0)\n        printf(\"Number is zero\");\n    else if (x>0)\n        printf(\"Number is positive\");\n    else\n        printf(\"Number is Negative\");\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "S-Alg2",
  "title": "অ্যালগরিদম: গ.সা.গু (ইউক্লিড)",
  "part": 5,
  "cluster": "O",
  "pattern": "ইউক্লিডের অ্যালগরিদম",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক অ্যালগরিদম (গসাগু বা GCD নির্ণয়):",
  "code": "Step 1: Start\nStep 2: Input x, y\nStep 3: s = x Mod y\nStep 4: x=y, y=s\nStep 5: If s != 0 then go to step 3\nStep 6: otherwise print x\nStep 7: End",
  "note": "",
  "issue": ""
 },
 {
  "id": "S6",
  "title": "উদ্দীপক ৬: ভেরিয়েবলের নাম বনাম কিওয়ার্ড",
  "part": 5,
  "cluster": "N",
  "pattern": "ভুল খোঁজা / নামকরণের নিয়ম",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক প্রোগ্রাম ৬ (ভেরিয়েবল নামকরণ ও কিওয়ার্ড ব্যবহার):",
  "code": "#include <stdio.h>\nint main ()\n{\n    float main = 3.11;\n    float stdio = 3.5;\n    float include;\n    include = main + 2;\n    printf(\"%f\", main);\n    printf(\"\\n %.2f\", stdio);\n    printf(\"\\n%f\", include);\n    return 0;\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "S7",
  "title": "উদ্দীপক ৭: i += 5 লুপ",
  "part": 5,
  "cluster": "M",
  "pattern": "লুপ ট্রেস",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক প্রোগ্রাম ৭ (লুপ ও ইনক্রিমেন্ট):",
  "code": "#include<stdio.h>\nmain ()\n{\n    int i, j = 0;\n    for(i = 0; i < 50; i += 5)\n    {\n        j = j + i;\n        printf(\"The value is incremented\");\n    }\n}",
  "note": "",
  "issue": ""
 },
 {
  "id": "S8",
  "title": "উদ্দীপক ৮: 5+10+...+100 এর যোগফল",
  "part": 5,
  "cluster": "M",
  "pattern": "সঞ্চয়ক ট্রেস",
  "diff": "মাঝারি",
  "imp": "অতি উচ্চ",
  "stmt": "উদ্দীপক প্রোগ্রাম ৮ (for লুপের মাধ্যমে যোগফল):",
  "code": "#include <stdio.h>\nint main ()\n{\n    int a, b = 0;\n    for (a = 5; a <= 100; a += 5)\n    {\n        b = b + a;\n    }\n    printf (\"%d\", b);\n    return 0;\n}",
  "note": "",
  "issue": ""
 }
];

const PATTERNS = [
 [
  "সরাসরি সূত্র",
  "P1–P5, P32 (ফিবোনাচ্চি ধাপ)",
  "ইনপুট নাও, সূত্র বসাও, ফল ছাপো"
 ],
 [
  "নির্বাচন (if / else-if / switch)",
  "P9–P16, Vowel-1, Vowel-2, Calc",
  "শর্ত বা মান অনুযায়ী শাখা বেছে নেওয়া"
 ],
 [
  "সঞ্চয়ক (sum += ...)",
  "P19, P21, P31, P33, Ex-131, S2, S3, S8",
  "লুপের ভেতরে চলমান যোগফলে যোগ করা"
 ],
 [
  "গণক",
  "P20, P25, P26",
  "প্রতিবার দুটি গণকের একটি বাড়ানো"
 ],
 [
  "চলমান সর্বোচ্চ/সর্বনিম্ন",
  "P22, S-Alg1",
  "h = a[0]; বড় মান পেলে বদলে দাও"
 ],
 [
  "মডুলো পরীক্ষা",
  "P10, P13, P26, P30, P33, P35",
  "% দিয়ে বিভাজ্যতা, জোড়-বিজোড় বা লিপইয়ার যাচাই"
 ],
 [
  "ইউক্লিডের অ্যালগরিদম",
  "P27, P29, S-Alg2",
  "t = h % l; h = l; l = t — l == 0 না হওয়া পর্যন্ত পুনরাবৃত্তি"
 ],
 [
  "ব্রুট-ফোর্স ল.সা.গু",
  "P28",
  "বড় সংখ্যা থেকে শুরু করে দুটিতেই বিভাজ্য না হওয়া পর্যন্ত বাড়াও"
 ],
 [
  "ভাগ দিয়ে পরীক্ষা, আগেই break",
  "P30",
  "২..N/2 ভাজক পরীক্ষা করো; প্রথমটি পেলেই break"
 ],
 [
  "পুনরাবৃত্ত গণনা",
  "P23, P32",
  "গুণফল (ফ্যাক্টোরিয়াল) বা t1, t2 ঘুরিয়ে (ফিবোনাচ্চি)"
 ],
 [
  "আগে বের হওয়া / এড়িয়ে যাওয়া",
  "P35, P36, Break, Continue, Goto",
  "continue একটি ধাপ এড়ায়; break লুপ ছেড়ে দেয়"
 ],
 [
  "লাইব্রেরি ফাংশন",
  "P6, P7, P40, P41, P39",
  "toupper/tolower (ctype.h), strlen/strcmp (string.h), sqrt/pow (math.h)"
 ],
 [
  "ফাংশনে ভাগ",
  "P38, P39",
  "প্রোটোটাইপ, কল, সংজ্ঞা"
 ]
];

const ANSWERS = [
 [
  "উদ্দীপক ১",
  "'I love ICT' ৯ বার ছাপা হয় (a = 1..9)"
 ],
 [
  "উদ্দীপক ২",
  "প্রথমে '1 3 7' ছাপে, তারপর 'Result = 7'"
 ],
 [
  "উদ্দীপক ৩",
  "10+20+...+100 = 550"
 ],
 [
  "উদ্দীপক ৭",
  "লুপ ১০ বার চলে (i = 0..45); বার্তা ১০ বার ছাপা হয়; j = 225"
 ],
 [
  "উদ্দীপক ৮",
  "5+10+...+100 = 1050"
 ],
 [
  "উদ্দীপক ৪-এর ভুল",
  "'n' হবে 'N'; \"/n\" হবে \"\\n\"; প্রম্পটে '1st number' লেখা, কিন্তু N পড়া হচ্ছে"
 ],
 [
  "উদ্দীপক ৫-এর ভুল",
  "scanf(\"%d\" & x)-এ কমা নেই এবং float-এর জন্য %d দেওয়া হয়েছে (দরকার %f); x=0 হবে x==0"
 ],
 [
  "উদ্দীপক ৬",
  "বৈধ C কোড। ছাপে 3.110000, 3.50, 5.110000। main, stdio ও include কিওয়ার্ড নয়"
 ]
];

const ISSUES = [
 [
  "P30",
  "০ ও ১ কে প্রাইম দেখায়, কারণ লুপ চলে না এবং count ০ থেকে যায়",
  "N < 2 হলে প্রাইম নয়—এই শর্ত যোগ করো"
 ],
 [
  "P39",
  "int s = (a+b+c)/2 ভগ্নাংশ কেটে ফেলে, তাই পরিসীমা বিজোড় হলে ক্ষেত্রফল ভুল হয়",
  "double s = (a+b+c)/2.0 ব্যবহার করো"
 ],
 [
  "P31",
  "শুধু ধারাটি ছাপে; যোগফল কখনো হিসাব করে না",
  "একটি সঞ্চয়ক (accumulator) যোগ করে যোগফল ছাপো"
 ],
 [
  "P37",
  "শিরোনামে যোগফল, কিন্তু কোড শুধু অ্যারের উপাদান ছাপে",
  "লুপে sum += mark[i] যোগ করো"
 ],
 [
  "P32",
  "সবসময় অন্তত ২টি পদ ছাপে; শিরোনামে '0 থেকে n', কিন্তু কোড n সংখ্যক পদ ছাপে",
  "পদের মান <= n হওয়া পর্যন্ত লুপ চালাও, অথবা শিরোনাম ঠিক করো"
 ],
 [
  "P25",
  "০ কে ধনাত্মক গোনে",
  "x == 0 আলাদাভাবে সামলাও"
 ],
 [
  "P19",
  "আউটপুট বার্তায় '1 থেকে n' লেখা, কিন্তু কোড শুধু বিজোড় সংখ্যার বর্গের যোগফল করে",
  "বার্তা বদলে দাও"
 ],
 [
  "P23",
  "int ১২!-এর বেশি হলে ওভারফ্লো করে",
  "long long ব্যবহার করো (২০!-এর বেশি হলে তাও ওভারফ্লো করে)"
 ],
 [
  "P27",
  "কোনো ইনপুট ০ হলে ভেঙে যায়",
  "ইনপুট ধনাত্মক কিনা যাচাই করো"
 ],
 [
  "P34b",
  "scanf(\"%s\", &sname)-এ ভুল ধরনের পয়েন্টার দেওয়া হয়েছে",
  "scanf(\"%s\", sname) ব্যবহার করো"
 ],
 [
  "নম্বর",
  "P8, P17, P18 ও P42 থেকে পরের নম্বরগুলো ফাইলে নেই; ক্যালকুলেটর, স্বরবর্ণ ও 131+... প্রোগ্রামে নম্বর দেওয়া নেই",
  "বই থেকে বাদ পড়া অংশ মিলিয়ে নাও"
 ]
];

const THEORY = [
 [
  "৫.৭.১৫ স্ট্রিং (String):",
  "প্রোগ্রামিং এ স্ট্রিং হলো কতগুলো অক্ষরের বিন্যাস যার সমাপ্তি অক্ষর হয় শূন্য দিয়ে যাকে C প্রোগ্রামিং বা অন্যান্য ভাষায় বলা হয় তথা '\\0' (Null Character) দিয়ে। C প্রোগ্রামিং এ স্ট্রিং এর অক্ষরগুলো একটি একমাত্রিক অ্যারেতে সংরক্ষণ করতে হয়। এ জায়গায় ক্যারেক্টার ডেটাটাইপ অ্যারেতে স্ট্রিং সংরক্ষণ করা যায়। স্ট্রিং ডেটাটাইপ সরাসরি নেই বিধায় এর জন্য পৃথক ডেটা টাইপ থাকলেও C প্রোগ্রামিং ভাষায় পৃথক কোন ডেটা টাইপ নেই। স্ট্রিং ডিক্লেয়ার করার স্পেসিফায়ার হলো %s। স্ট্রিং এ বিদ্যমান প্রতিটি অক্ষর এর জন্য মেমোরিতে ১ বাইট পরিমাণ স্পেস প্রয়োজন হয়। কোন স্ট্রিং এর শেষ বোঝাতে Null Character তথা '\\0' ব্যবহৃত হয়।\n**Null character i.e. Terminated with character '\\0'**\nউপরের চিত্র বিশ্লেষণ করলে দেখা যাবে যে এখানে str নামের একটি অ্যারে তৈরি করা হয়েছে যার ভেতরের ভ্যালু str[0] থেকে str[7] তথা ৮টি অক্ষর বা ক্যারেক্টার রাখা যাবে। উল্লেখ্য যে str[7] এ কোন ক্যারেক্টার রাখা যাবে না। এটি নাল তথা ('\\0') ক্যারেক্টার পাবে।\nলক্ষ্যণীয় যে, সাধারণত ইনিশিয়ালাইজেশনে ক্যারেক্টার ইনপুট নিতে হলে যেমন একটি লুপ ব্যবহার করে একটি একটি করে ইনপুট নিতে হয়। পক্ষান্তরে, ক্যারেক্টার অ্যারে বা স্ট্রিংয়ের ক্ষেত্রে (scanf) ফাংশনের মধ্যে ফরম্যাট স্পেসিফায়ার %s ব্যবহার করে সম্পূর্ণ স্ট্রিংটি একবারে ইনপুট নেয়া যায়। লক্ষণীয় যে, স্ট্রিং এর মধ্যে কোন স্পেস (Space) রাখা যাবে না। যেমন Capital City। অর্থাৎ একটি স্ট্রিং এর দৈর্ঘ্য হলো Space ব্যতীত স্পেস এ বিদ্যমান মোট অক্ষরের সংখ্যা। উপরের উদাহরণে স্ট্রিং এর মোট দৈর্ঘ্য হবে ৭ অর্থাৎ Space সহ City হিসেবে আসবে না।"
 ],
 [
  "৫.৭.১৪ ফাংশন (Function):",
  "প্রোগ্রামিং এ এমন অনেক বড় প্রোগ্রাম তৈরি করতে হয় যার জন্য অনেক লাইন কোডিং এর প্রয়োজন পড়ে। বড় প্রোগ্রামকে ছোট ছোট অংশে ভাগ করে প্রতিটি অংশের জন্য আলাদা আলাদা কোড লেখা হলে তাকে ফাংশন বলে। অর্থাৎ সি প্রোগ্রামের যেসব অংশ নির্দিষ্ট কাজ সম্পন্ন করে তাদের ফাংশন বলে। ফাংশন দু প্রকার যথা:\n1. User-defined function\n2. Built-in/library function\n**User-defined function:** ব্যবহারকারী তার নিজস্ব প্রয়োজনে নিজের মতো করে যে ফাংশন তৈরি করে তাকে User-defined function বলে।\n**Built-in/library function:** কম্পাইলার তৈরির সময় যেসকল ফাংশন তৈরি করে দেয়া হয় তাদের Built-in/library function বলে। যেমন: `printf()`, `scanf()`, `clrscr()`, `sqrt()`, `pow()` ইত্যাদি।\n**একটি উদাহরণ সাহায্যে বিষয়টি তুলে ধরা হলো:**\n*   **Function Calling:** মেইন ফাংশন (main) হতে বা অন্য কোনো ফাংশন হতে যখন কোনো ফাংশনকে কল করা হয়।\n*   **Function Prototype / Declaration:** প্রোগ্রামের শুরুতে মেইন ফাংশনের আগে ফাংশন ডিক্লেয়ার করা।\n*   **Function Definition:** ফাংশনটি কী কাজ করবে তার বিস্তারিত বর্ণনা।"
 ],
 [
  "৫.৭.১৫ অ্যারে (Array):",
  "অ্যারে হলো একই টাইপের বা সমপ্রকৃতির ডেটার সমাবেশ। অর্থাৎ একই ডেটা টাইপের অনেকগুলো ভেরিয়েবল যখন একই নামে প্রকাশ করা হয় তখন তাকে অ্যারে বলে। সি ভাষায় অ্যারে একটি ডেটা স্ট্রাকচার যা একই টাইপের একাধিক ডেটাকে একত্রে সংরক্ষণ করতে ব্যবহৃত হয়।\n**অ্যারের ব্যবহার:**\n1.  একই ধরনের অনেকগুলো ভেরিয়েবল ডিক্লেয়ার না করে অ্যারে ব্যবহার করে মেমোরি বাঁচানো যায়।\n2.  অ্যারে ব্যবহার করে ডেটাকে সহজে শর্টিং (Sorting) এবং সার্চিং (Searching) করা যায়।\n**অ্যারে ঘোষণা (Declaration):**\n*   **One Dimensional Array:** `data_type array_name [size]` (যেমন: `int marks[5];`)\n*   **Two Dimensional Array:** `data_type array_name [row_size][column_size]` (যেমন: `int matrix[3][4];`)"
 ]
];

/* ---------- ধ্রুবক ---------- */
const DIFFS = ["সহজ", "মাঝারি", "কঠিন"];
const IMPS = ["অতি উচ্চ", "উচ্চ", "মাঝারি-উচ্চ", "মাঝারি", "নিম্ন-মাঝারি"]; // বেশি থেকে কম
const IMP_RANK = { "অতি উচ্চ": 5, "উচ্চ": 4, "মাঝারি-উচ্চ": 3, "মাঝারি": 2, "নিম্ন-মাঝারি": 1 };
const IMP_CLASS = { "অতি উচ্চ": "i5", "উচ্চ": "i4", "মাঝারি-উচ্চ": "i3", "মাঝারি": "i2", "নিম্ন-মাঝারি": "i1" };
const PARTS = [1, 2, 3, 4, 5];
const STATUSES = ["করা হয়নি", "চলছে", "শেষ"];
const ALL = "সব";

PROBLEMS.forEach((p, order) => { p.order = order; });

/* ---------- সংরক্ষিত অবস্থা ---------- */
const STORE_KEY = "c-programming-tracker-status-v1";
let status = {};
try { status = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { status = {}; }
const getStatus = (id) => status[id] || STATUSES[0];
function setStatus(id, value) {
  status[id] = value;
  try { localStorage.setItem(STORE_KEY, JSON.stringify(status)); } catch (e) { /* সংরক্ষণ বন্ধ */ }
}

/* ---------- সহায়ক ---------- */
const $ = (id) => document.getElementById(id);
const bn = (n) => Number(n).toLocaleString("bn-BD");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const clusterName = (code) => CLUSTERS.find((c) => c.code === code).name;

// বইয়ের লেখার ছোট মার্কডাউন (বোল্ড, কোড, তালিকা, উদ্ধৃতি)
function md(text) {
  return String(text).split("\n").map((raw) => {
    let line = esc(raw);
    let cls = "";
    if (/^&gt;\s?/.test(line)) { line = line.replace(/^&gt;\s?/, ""); cls = "quote"; }
    else if (/^\*\s{2,}/.test(raw)) { line = "• " + line.replace(/^\*\s+/, ""); }
    line = line
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*\s][^*]*?)\*/g, "<em>$1</em>");
    return cls ? `<span class="${cls}">${line}</span>` : line;
  }).join("<br>");
}

function fillSelect(el, options) {
  el.innerHTML = "";
  for (const o of options) {
    const opt = document.createElement("option");
    opt.value = typeof o === "string" ? o : o.value;
    opt.textContent = typeof o === "string" ? o : o.label;
    el.appendChild(opt);
  }
}

/* ---------- ফিল্টার ---------- */
const filters = { cluster: ALL, diff: ALL, imp: ALL, part: ALL, status: ALL, q: "", sort: "order" };
const selects = { cluster: $("f-cluster"), diff: $("f-diff"), imp: $("f-imp"), part: $("f-part"), status: $("f-status") };
fillSelect(selects.cluster, [ALL, ...CLUSTERS.map((c) => ({ value: c.code, label: `${c.code} · ${c.name}` }))]);
fillSelect(selects.diff, [ALL, ...DIFFS]);
fillSelect(selects.imp, [ALL, ...IMPS]);
fillSelect(selects.part, [ALL, ...PARTS.map((n) => ({ value: String(n), label: `অংশ ${bn(n)}` }))]);
fillSelect(selects.status, [ALL, ...STATUSES]);

for (const key of Object.keys(selects)) {
  selects[key].addEventListener("change", () => { filters[key] = selects[key].value; renderAll(); });
}
$("f-q").addEventListener("input", (e) => { filters.q = e.target.value.trim().toLowerCase(); renderList(); });
$("f-sort").addEventListener("change", (e) => { filters.sort = e.target.value; renderList(); });
$("f-reset").addEventListener("click", () => {
  Object.assign(filters, { cluster: ALL, diff: ALL, imp: ALL, part: ALL, status: ALL, q: "", sort: "order" });
  for (const key of Object.keys(selects)) selects[key].value = ALL;
  $("f-q").value = ""; $("f-sort").value = "order";
  renderAll();
});

/* ---------- অগ্রগতি ---------- */
function renderProgress() {
  const done = PROBLEMS.filter((p) => getStatus(p.id) === "শেষ").length;
  const doing = PROBLEMS.filter((p) => getStatus(p.id) === "চলছে").length;
  const pct = Math.round((done / PROBLEMS.length) * 100);
  $("bar-fill").style.width = pct + "%";
  $("progress-text").textContent =
    `${bn(done)}/${bn(PROBLEMS.length)} শেষ (${bn(pct)}%) · চলছে ${bn(doing)} · বাকি ${bn(PROBLEMS.length - done - doing)}`;
}

/* ---------- সারসংক্ষেপ ছক ---------- */
function renderMatrix() {
  const body = document.querySelector("#matrix tbody");
  const foot = document.querySelector("#matrix tfoot");
  body.innerHTML = "";
  const totals = { সহজ: 0, মাঝারি: 0, কঠিন: 0, all: 0 };
  for (const c of CLUSTERS) {
    const items = PROBLEMS.filter((p) => p.cluster === c.code);
    const tr = document.createElement("tr");
    if (filters.cluster === c.code) tr.className = "active";
    tr.tabIndex = 0;
    tr.setAttribute("role", "button");
    tr.setAttribute("aria-label", `${c.code} ক্লাস্টার ফিল্টার করুন`);
    const nums = DIFFS.map((d) => {
      const n = items.filter((p) => p.diff === d).length;
      totals[d] += n;
      return n;
    });
    totals.all += items.length;
    tr.innerHTML =
      `<td class="m-code"><span class="cluster-tag">${c.code}</span></td>` +
      `<td class="m-name"><span class="m-tag">${c.code}</span> ${esc(c.name)}</td>` +
      nums.map((n, i) => `<td class="num" data-label="${DIFFS[i]}">${n ? bn(n) : "–"}</td>`).join("") +
      `<td class="num" data-label="মোট">${bn(items.length)}</td>` +
      `<td class="num m-imp" data-label="সাধারণ গুরুত্ব"><span class="chip ${IMP_CLASS[c.imp]}">${c.imp}</span></td>`;
    const toggle = () => {
      filters.cluster = filters.cluster === c.code ? ALL : c.code;
      selects.cluster.value = filters.cluster;
      renderAll();
      if (filters.cluster !== ALL) $("list-h").scrollIntoView();
    };
    tr.addEventListener("click", toggle);
    tr.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    body.appendChild(tr);
  }
  foot.innerHTML =
    `<tr><td class="m-code"></td><td class="m-name">মোট</td>` +
    DIFFS.map((d) => `<td class="num" data-label="${d}">${bn(totals[d])}</td>`).join("") +
    `<td class="num" data-label="মোট">${bn(totals.all)}</td><td class="m-imp"></td></tr>`;
}

function renderCross() {
  const head = document.querySelector("#cross thead");
  const body = document.querySelector("#cross tbody");
  head.innerHTML = `<tr><th>কঠিনতা</th>${IMPS.map((i) => `<th>${i}</th>`).join("")}<th>মোট</th></tr>`;
  body.innerHTML = DIFFS.map((d) => {
    const row = IMPS.map((i) => PROBLEMS.filter((p) => p.diff === d && p.imp === i).length);
    return `<tr><th scope="row">${d}</th>${row.map((n, k) => `<td class="num" data-label="${IMPS[k]}">${n ? bn(n) : "–"}</td>`).join("")}<td class="num" data-label="মোট">${bn(row.reduce((a, b) => a + b, 0))}</td></tr>`;
  }).join("");
}

/* ---------- সমস্যা তালিকা ---------- */
function visibleProblems() {
  const list = PROBLEMS.filter((p) =>
    (filters.cluster === ALL || p.cluster === filters.cluster) &&
    (filters.diff === ALL || p.diff === filters.diff) &&
    (filters.imp === ALL || p.imp === filters.imp) &&
    (filters.part === ALL || String(p.part) === filters.part) &&
    (filters.status === ALL || getStatus(p.id) === filters.status) &&
    (!filters.q || (p.id + " " + p.title + " " + p.stmt + " " + p.pattern).toLowerCase().includes(filters.q))
  );
  if (filters.sort === "imp") list.sort((a, b) => IMP_RANK[b.imp] - IMP_RANK[a.imp] || a.order - b.order);
  return list;
}

function renderList() {
  const table = $("problems");
  table.querySelectorAll("tbody").forEach((t) => t.remove());
  const list = visibleProblems();
  for (const p of list) {
    const st = getStatus(p.id);
    const tb = document.createElement("tbody");
    tb.className = "prob" + (st === "শেষ" ? " done" : st === "চলছে" ? " doing" : "");
    tb.innerHTML = `
      <tr class="main">
        <td class="c-id">${esc(p.id)}</td>
        <td class="c-title">${esc(p.title)}${p.issue ? ' <span class="flag" title="কোডে ত্রুটি আছে">⚠</span>' : ""}<span class="part">অংশ ${bn(p.part)}</span></td>
        <td data-label="ক্লাস্টার"><span class="cluster-tag" title="${esc(clusterName(p.cluster))}">${p.cluster}</span></td>
        <td class="c-pat" data-label="প্যাটার্ন">${esc(p.pattern)}</td>
        <td data-label="কঠিনতা"><span class="chip d-${p.diff}">${p.diff}</span></td>
        <td data-label="গুরুত্ব"><span class="chip ${IMP_CLASS[p.imp]}">${p.imp}</span></td>
        <td class="c-status" data-label="অবস্থা"></td>
        <td class="c-more"><button type="button" class="more" data-id="${esc(p.id)}" aria-haspopup="dialog">কোড দেখো</button></td>
      </tr>`;
    const sel = document.createElement("select");
    sel.setAttribute("aria-label", `${p.id} এর অবস্থা`);
    fillSelect(sel, STATUSES);
    sel.value = st;
    sel.addEventListener("change", () => {
      setStatus(p.id, sel.value);
      tb.className = "prob" + (sel.value === "শেষ" ? " done" : sel.value === "চলছে" ? " doing" : "");
      renderProgress();
      if (filters.status !== ALL) renderList();
    });
    tb.querySelector(".c-status").appendChild(sel);
    table.appendChild(tb);
  }
  $("count").textContent = `${bn(list.length)}টি সমস্যা দেখানো হচ্ছে (মোট ${bn(PROBLEMS.length)})`;
  $("empty").hidden = list.length > 0;
}

/* ---------- কোড মডাল ---------- */
const modal = $("code-modal");
let current = null;

function openModal(p) {
  current = p;
  $("m-title").textContent = `${p.id} · ${p.title}`;
  $("m-meta").innerHTML =
    `<span class="cluster-tag" title="${esc(clusterName(p.cluster))}">${p.cluster}</span> ` +
    `<span class="chip d-${p.diff}">${p.diff}</span> ` +
    `<span class="chip ${IMP_CLASS[p.imp]}">${p.imp}</span> ` +
    `<span class="m-pat">${esc(p.pattern)}</span>`;
  $("m-stmt").innerHTML = md(p.stmt);
  $("m-code").textContent = p.code;
  $("m-note").innerHTML = p.note ? `<h3>আউটপুট / নোট</h3><p>${md(p.note)}</p>` : "";
  $("m-note").hidden = !p.note;
  $("m-issue").innerHTML = p.issue ? `<h3>⚠ কোডের ত্রুটি</h3><p>${esc(p.issue)}</p>` : "";
  $("m-issue").hidden = !p.issue;
  $("m-copy").textContent = "কোড কপি করো";
  modal.querySelector(".m-body").scrollTop = 0;
  if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
}

$("problems").addEventListener("click", (e) => {
  const btn = e.target.closest("button.more");
  if (!btn) return;
  openModal(PROBLEMS.find((x) => x.id === btn.dataset.id));
});

$("m-close").addEventListener("click", () => modal.close());
// ব্যাকড্রপে ক্লিক করলে বন্ধ
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

$("m-copy").addEventListener("click", () => {
  const btn = $("m-copy");
  const code = current.code;
  const done = () => { btn.textContent = "কপি হয়েছে"; setTimeout(() => { btn.textContent = "কোড কপি করো"; }, 1500); };
  const fail = () => { btn.textContent = "কপি করা যায়নি"; };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(done, fail);
  } else {
    const ta = document.createElement("textarea");
    ta.value = code; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch (err) { fail(); }
    ta.remove();
  }
});

/* ---------- সহায়ক অংশ ---------- */
function renderExtras() {
  $("answers").innerHTML = ANSWERS.map(([k, v]) => `<tr><th scope="row" data-label="উদ্দীপক">${esc(k)}</th><td data-label="উত্তর">${esc(v)}</td></tr>`).join("");
  $("issues").innerHTML = ISSUES.map(([id, issue, fix]) =>
    `<tr><th scope="row" data-label="কোড">${esc(id)}</th><td data-label="সমস্যা">${esc(issue)}</td><td data-label="সমাধান">${esc(fix)}</td></tr>`).join("");
  $("patterns").innerHTML = PATTERNS.map(([name, ids, idea]) =>
    `<tr><th scope="row" data-label="প্যাটার্ন">${esc(name)}</th><td data-label="সমস্যা">${esc(ids)}</td><td data-label="ধারণা">${esc(idea)}</td></tr>`).join("");
  $("theory").innerHTML = THEORY.map(([h, t]) => `<article><h3>${esc(h)}</h3><p>${md(t)}</p></article>`).join("");
}

function renderAll() { renderProgress(); renderMatrix(); renderList(); }
renderCross();
renderExtras();
renderAll();

