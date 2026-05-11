# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reporters.spec.ts >> Axe Reporting Utils >> should test a website with logger reporter
- Location: tests/reporters.spec.ts:8:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.w3schools.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - generic [ref=e2]:
      - link "Home link" [ref=e3] [cursor=pointer]:
        - /url: https://www.w3schools.com
        - generic [ref=e4]: 
      - navigation [ref=e5]:
        - button "Tutorials" [ref=e6] [cursor=pointer]:
          - text: Tutorials
          - generic [ref=e7]: 
          - text: 
        - button "References" [ref=e8] [cursor=pointer]:
          - text: References
          - generic [ref=e9]: 
          - text: 
        - button "Exercises" [ref=e10] [cursor=pointer]:
          - text: Exercises
          - generic [ref=e11]: 
          - text: 
        - button "Certificates" [ref=e12] [cursor=pointer]:
          - text: Certificates
          - generic [ref=e13]: 
          - text: 
      - text:  
      - generic [ref=e15]:
        - generic [ref=e16]: Search field
        - textbox "Search field" [ref=e17]:
          - /placeholder: Search...
        - button "Button to search" [ref=e18] [cursor=pointer]:
          - img [ref=e19]
      - button "All our services" [ref=e22] [cursor=pointer]:
        - img [ref=e23]
      - generic [ref=e25]:
        - button "Sign in to your account" [ref=e26] [cursor=pointer]: Sign In
        - link "W3Schools Certificates" [ref=e27] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/course-catalog
          - text: Get Certified
        - link "Become a PLUS user and unlock powerful features" [ref=e28] [cursor=pointer]:
          - /url: https://order.w3schools.com/plans
          - text: Upgrade
        - link "Contact us about W3Schools Academy for educational institutions" [ref=e29] [cursor=pointer]:
          - /url: /academy/index.php
          - text: Teachers
        - link "Get Your Own Website With W3Schools Spaces" [ref=e30] [cursor=pointer]:
          - /url: /spaces/index.php
          - text: Spaces
        - link "W3Schools Bootcamps" [ref=e31] [cursor=pointer]:
          - /url: /bootcamp/index.php
          - text: Bootcamps
    - text:      
    - generic:
      - generic: 
  - generic [ref=e35]:
    - generic:
      - generic: 
    - link "HTML" [ref=e36] [cursor=pointer]:
      - /url: /html/default.asp
    - link "CSS" [ref=e37] [cursor=pointer]:
      - /url: /css/default.asp
    - link "JAVASCRIPT" [ref=e38] [cursor=pointer]:
      - /url: /js/default.asp
    - link "SQL" [ref=e39] [cursor=pointer]:
      - /url: /sql/default.asp
    - link "PYTHON" [ref=e40] [cursor=pointer]:
      - /url: /python/default.asp
    - link "JAVA" [ref=e41] [cursor=pointer]:
      - /url: /java/default.asp
    - link "PHP" [ref=e42] [cursor=pointer]:
      - /url: /php/default.asp
    - link "HOW TO" [ref=e43] [cursor=pointer]:
      - /url: /howto/default.asp
    - link "W3.CSS" [ref=e44] [cursor=pointer]:
      - /url: /w3css/default.asp
    - link "C" [ref=e45] [cursor=pointer]:
      - /url: /c/index.php
    - link "C++" [ref=e46] [cursor=pointer]:
      - /url: /cpp/default.asp
    - link "C#" [ref=e47] [cursor=pointer]:
      - /url: /cs/index.php
    - link "BOOTSTRAP" [ref=e48] [cursor=pointer]:
      - /url: /bootstrap/bootstrap_ver.asp
    - link "REACT" [ref=e49] [cursor=pointer]:
      - /url: /react/default.asp
    - link "MYSQL" [ref=e50] [cursor=pointer]:
      - /url: /mysql/default.asp
    - link "JQUERY" [ref=e51] [cursor=pointer]:
      - /url: /jquery/default.asp
    - link "EXCEL" [ref=e52] [cursor=pointer]:
      - /url: /excel/index.php
    - link "XML" [ref=e53] [cursor=pointer]:
      - /url: /xml/default.asp
    - link "DJANGO" [ref=e54] [cursor=pointer]:
      - /url: /django/index.php
    - link "NUMPY" [ref=e55] [cursor=pointer]:
      - /url: /python/numpy/default.asp
    - link "PANDAS" [ref=e56] [cursor=pointer]:
      - /url: /python/pandas/default.asp
    - link "NODEJS" [ref=e57] [cursor=pointer]:
      - /url: /nodejs/default.asp
    - link "DSA" [ref=e58] [cursor=pointer]:
      - /url: /dsa/index.php
    - link "TYPESCRIPT" [ref=e59] [cursor=pointer]:
      - /url: /typescript/index.php
    - link "ANGULAR" [ref=e60] [cursor=pointer]:
      - /url: /angular/default.asp
    - link "ANGULARJS" [ref=e61] [cursor=pointer]:
      - /url: /angularjs/default.asp
    - link "GIT" [ref=e62] [cursor=pointer]:
      - /url: /git/default.asp
    - link "POSTGRESQL" [ref=e63] [cursor=pointer]:
      - /url: /postgresql/index.php
    - link "MONGODB" [ref=e64] [cursor=pointer]:
      - /url: /mongodb/index.php
    - link "ASP" [ref=e65] [cursor=pointer]:
      - /url: /asp/default.asp
    - link "AI" [ref=e66] [cursor=pointer]:
      - /url: /ai/default.asp
    - link "R" [ref=e67] [cursor=pointer]:
      - /url: /r/default.asp
    - link "GO" [ref=e68] [cursor=pointer]:
      - /url: /go/index.php
    - link "KOTLIN" [ref=e69] [cursor=pointer]:
      - /url: /kotlin/index.php
    - link "SWIFT" [ref=e70] [cursor=pointer]:
      - /url: /swift/default.asp
    - link "SASS" [ref=e71] [cursor=pointer]:
      - /url: /sass/default.asp
    - link "VUE" [ref=e72] [cursor=pointer]:
      - /url: /vue/index.php
    - link "GEN AI" [ref=e73] [cursor=pointer]:
      - /url: /gen_ai/index.php
    - link "SCIPY" [ref=e74] [cursor=pointer]:
      - /url: /python/scipy/index.php
    - link "AWS" [ref=e75] [cursor=pointer]:
      - /url: /aws/index.php
    - link "CYBERSECURITY" [ref=e76] [cursor=pointer]:
      - /url: /cybersecurity/index.php
    - link "DATA SCIENCE" [ref=e77] [cursor=pointer]:
      - /url: /datascience/default.asp
    - link "INTRO TO PROGRAMMING" [ref=e78] [cursor=pointer]:
      - /url: /programming/index.php
    - link "INTRO TO HTML & CSS" [ref=e79] [cursor=pointer]:
      - /url: /htmlcss/default.asp
    - link "BASH" [ref=e80] [cursor=pointer]:
      - /url: /bash/index.php
    - link "RUST" [ref=e81] [cursor=pointer]:
      - /url: /rust/index.php
    - link "TOOLS" [ref=e82] [cursor=pointer]:
      - /url: /tools/index.php
  - generic [ref=e87]:
    - generic [ref=e89]:
      - heading "Learn to Code" [level=1] [ref=e90]
      - heading "With the world's largest web developer site." [level=3] [ref=e91]:  With the world's largest web developer site.
      - generic [ref=e92]:
        - textbox "Search our tutorials" [ref=e93]:
          - /placeholder: Search our tutorials, e.g. HTML
        - button "" [ref=e94] [cursor=pointer]:
          - generic "Search our tutorials" [ref=e95]: 
      - heading "Not Sure Where To Begin?" [level=4] [ref=e96]:
        - link "Not Sure Where To Begin?" [ref=e97] [cursor=pointer]:
          - /url: where_to_start.asp
    - img [ref=e98]
    - generic [ref=e100]:
      - generic:
        - generic [ref=e101]:
          - heading "HTML" [level=1] [ref=e102]
          - paragraph [ref=e103]: The language for building web pages
          - link "Learn HTML" [ref=e104] [cursor=pointer]:
            - /url: /html/default.asp
          - link "Video Tutorial" [ref=e105] [cursor=pointer]:
            - /url: https://www.w3schools.com/videos/index.php
          - link "HTML Reference" [ref=e106] [cursor=pointer]:
            - /url: /tags/default.asp
          - link "Get Certified" [ref=e107] [cursor=pointer]:
            - /url: https://campus.w3schools.com/collections/certifications/products/html-certificate
        - generic [ref=e109]:
          - heading "HTML Example:" [level=3] [ref=e110]
          - generic [ref=e111]:
            - text: <!DOCTYPE html>
            - generic [ref=e112]: <html>
            - generic [ref=e113]: <head>
            - generic [ref=e114]: <title>
            - text: HTML Tutorial
            - generic [ref=e115]: </title>
            - generic [ref=e116]: </head>
            - generic [ref=e117]: <body>
            - generic [ref=e118]: <h1>
            - text: This is a heading
            - generic [ref=e119]: </h1>
            - generic [ref=e120]: <p>
            - text: This is a paragraph.
            - generic [ref=e121]: </p>
            - generic [ref=e122]: </body>
            - generic [ref=e123]: </html>
          - link "Try it Yourself" [ref=e124] [cursor=pointer]:
            - /url: /html/tryit.asp?filename=tryhtml_default_default
    - generic [ref=e125]:
      - generic:
        - generic [ref=e126]:
          - heading "CSS" [level=1] [ref=e127]
          - paragraph [ref=e128]: The language for styling web pages
          - link "Learn CSS" [ref=e129] [cursor=pointer]:
            - /url: /css/default.asp
          - link "CSS Reference" [ref=e130] [cursor=pointer]:
            - /url: /cssref/index.php
          - link "Get Certified" [ref=e131] [cursor=pointer]:
            - /url: https://campus.w3schools.com/collections/certifications/products/css-certificate
        - generic [ref=e133]:
          - heading "CSS Example:" [level=3] [ref=e134]
          - generic [ref=e136]:
            - text: "body {"
            - generic [ref=e137]:
              - text: background-color
              - generic [ref=e138]: ": lightblue;"
            - text: "}"
            - text: "h1 {"
            - generic [ref=e139]:
              - text: color
              - generic [ref=e140]: ": white;"
              - text: text-align
              - generic [ref=e141]: ": center;"
            - text: "}"
            - text: "p {"
            - generic [ref=e142]:
              - text: font-family
              - generic [ref=e143]: ": verdana;"
            - text: "}"
          - link "Try it Yourself" [ref=e144] [cursor=pointer]:
            - /url: /css/tryit.asp?filename=trycss_default
    - generic [ref=e145]:
      - generic:
        - generic [ref=e146]:
          - heading "JavaScript" [level=1] [ref=e147]
          - paragraph [ref=e148]: The language for programming web pages
          - link "Learn JavaScript" [ref=e149] [cursor=pointer]:
            - /url: /js/default.asp
          - link "JavaScript Reference" [ref=e150] [cursor=pointer]:
            - /url: /jsref/default.asp
          - link "Get Certified" [ref=e151] [cursor=pointer]:
            - /url: https://campus.w3schools.com/collections/certifications/products/javascript-certificate
        - generic [ref=e153]:
          - heading "JavaScript Example:" [level=3] [ref=e154]
          - generic [ref=e156]:
            - generic [ref=e157]:
              - text: <button
              - generic [ref=e158]: onclick="myFunction()"
              - text: ">"
            - text: Click Me!
            - generic [ref=e159]: </button>
            - generic [ref=e160]: <script>
            - generic [ref=e161]:
              - text: "function myFunction() {"
              - text: let x = document.getElementById("demo");
              - text: x.style.fontSize = "25px";
              - text: x.style.color = "red";
              - text: "}"
            - generic [ref=e162]: </script>
          - link "Try it Yourself" [ref=e163] [cursor=pointer]:
            - /url: /js/tryit.asp?filename=tryjs_default
    - generic [ref=e164]:
      - generic:
        - generic [ref=e165]:
          - heading "Python" [level=1] [ref=e166]
          - paragraph [ref=e167]: A popular programming language
          - link "Learn Python" [ref=e168] [cursor=pointer]:
            - /url: /python/default.asp
          - link "Python Reference" [ref=e169] [cursor=pointer]:
            - /url: /python/python_reference.asp
          - link "Get Certified" [ref=e170] [cursor=pointer]:
            - /url: https://campus.w3schools.com/collections/certifications/products/python-certificate
        - generic [ref=e172]:
          - heading "Python Example:" [level=3] [ref=e173]
          - generic [ref=e175]:
            - text: "if 5 > 2:"
            - text: print("Five is greater than two!")
          - link "Try it Yourself" [ref=e176] [cursor=pointer]:
            - /url: /python/trypython.asp?filename=demo_indentation
    - generic [ref=e177]:
      - generic:
        - generic [ref=e178]:
          - heading "SQL" [level=1] [ref=e179]
          - paragraph [ref=e180]: A language for accessing databases
          - link "Learn SQL" [ref=e181] [cursor=pointer]:
            - /url: /sql/default.asp
          - link "SQL Reference" [ref=e182] [cursor=pointer]:
            - /url: /sql/sql_ref_keywords.asp
          - link "Get Certified" [ref=e183] [cursor=pointer]:
            - /url: https://campus.w3schools.com/collections/certifications/products/sql-certificate
        - generic [ref=e185]:
          - heading "SQL Example:" [level=3] [ref=e186]
          - generic [ref=e188]:
            - text: SELECT * FROM Customers
            - text: WHERE Country='Mexico';
          - link "Try it Yourself" [ref=e189] [cursor=pointer]:
            - /url: /sql/trysql.asp?filename=trysql_select_where
    - generic [ref=e190]:
      - generic:
        - generic [ref=e192]:
          - heading "PHP" [level=2] [ref=e193]
          - heading "A web server programming language" [level=5] [ref=e195]
          - link "Learn PHP" [ref=e196] [cursor=pointer]:
            - /url: /php/default.asp
        - generic [ref=e198]:
          - heading "jQuery" [level=2] [ref=e199]
          - heading "A JS library for developing web pages" [level=5] [ref=e201]
          - link "Learn jQuery" [ref=e202] [cursor=pointer]:
            - /url: /jquery/default.asp
        - generic [ref=e204]:
          - heading "Java" [level=2] [ref=e205]
          - heading "A programming language" [level=5] [ref=e207]
          - link "Learn Java" [ref=e208] [cursor=pointer]:
            - /url: /java/default.asp
        - generic [ref=e210]:
          - heading "C++" [level=2] [ref=e211]
          - heading "A programming language" [level=5] [ref=e213]
          - link "Learn C++" [ref=e214] [cursor=pointer]:
            - /url: /cpp/default.asp
        - generic [ref=e216]:
          - heading "W3.CSS" [level=2] [ref=e217]
          - heading "A CSS framework for faster and better responsive web pages" [level=5] [ref=e219]
          - link "Learn W3.CSS" [ref=e220] [cursor=pointer]:
            - /url: /w3css/default.asp
        - generic [ref=e222]:
          - heading "Bootstrap" [level=2] [ref=e223]
          - heading "A CSS framework for designing better web pages" [level=5] [ref=e225]
          - link "Learn Bootstrap" [ref=e226] [cursor=pointer]:
            - /url: /bootstrap/bootstrap_ver.asp
    - generic [ref=e227]:
      - generic:
        - link "C" [ref=e229] [cursor=pointer]:
          - /url: /c/index.php
          - heading "C" [level=2] [ref=e231]
        - link "C#" [ref=e233] [cursor=pointer]:
          - /url: /cs/index.php
          - heading "C#" [level=2] [ref=e235]
        - link "R" [ref=e237] [cursor=pointer]:
          - /url: /r/default.asp
          - heading "R" [level=2] [ref=e239]
        - link "Kotlin" [ref=e241] [cursor=pointer]:
          - /url: /kotlin/index.php
          - heading "Kotlin" [level=2] [ref=e243]
        - link "Node.js" [ref=e245] [cursor=pointer]:
          - /url: /nodejs/default.asp
          - heading "Node.js" [level=2] [ref=e247]
        - link "React" [ref=e249] [cursor=pointer]:
          - /url: /react/default.asp
          - heading "React" [level=2] [ref=e251]
        - link "JSON" [ref=e253] [cursor=pointer]:
          - /url: /js/js_json.asp
          - heading "JSON" [level=2] [ref=e255]
        - link "Vue" [ref=e257] [cursor=pointer]:
          - /url: /vue/index.php
          - heading "Vue" [level=2] [ref=e259]
        - link "MySQL" [ref=e261] [cursor=pointer]:
          - /url: /mysql/default.asp
          - heading "MySQL" [level=2] [ref=e263]
        - link "XML" [ref=e265] [cursor=pointer]:
          - /url: /xml/default.asp
          - heading "XML" [level=2] [ref=e267]
        - link "Sass" [ref=e269] [cursor=pointer]:
          - /url: /sass/default.asp
          - heading "Sass" [level=2] [ref=e271]
        - link "Icons" [ref=e273] [cursor=pointer]:
          - /url: /icons/default.asp
          - heading "Icons" [level=2] [ref=e275]
        - link "RWD" [ref=e277] [cursor=pointer]:
          - /url: /css/css_rwd_intro.asp
          - heading "RWD" [level=2] [ref=e279]
        - link "Graphics" [ref=e281] [cursor=pointer]:
          - /url: /graphics/default.asp
          - heading "Graphics" [level=2] [ref=e283]
        - link "SVG" [ref=e285] [cursor=pointer]:
          - /url: /graphics/svg_intro.asp
          - heading "SVG" [level=2] [ref=e287]
        - link "Canvas" [ref=e289] [cursor=pointer]:
          - /url: /graphics/canvas_intro.asp
          - heading "Canvas" [level=2] [ref=e291]
        - link "Raspberry Pi" [ref=e293] [cursor=pointer]:
          - /url: /nodejs/nodejs_raspberrypi.asp
          - heading "Raspberry Pi" [level=2] [ref=e295]
        - link "Cyber Security" [ref=e297] [cursor=pointer]:
          - /url: /cybersecurity/index.php
          - heading "Cyber Security" [level=2] [ref=e299]
        - link "Colors" [ref=e301] [cursor=pointer]:
          - /url: /colors/default.asp
          - heading "Colors" [level=2] [ref=e303]
        - link "Git" [ref=e305] [cursor=pointer]:
          - /url: /git/default.asp
          - heading "Git" [level=2] [ref=e307]
        - link "Matplotlib" [ref=e309] [cursor=pointer]:
          - /url: /python/matplotlib_intro.asp
          - heading "Matplotlib" [level=2] [ref=e311]
        - link "NumPy" [ref=e313] [cursor=pointer]:
          - /url: /python/numpy/default.asp
          - heading "NumPy" [level=2] [ref=e315]
        - link "Pandas" [ref=e317] [cursor=pointer]:
          - /url: /python/pandas/default.asp
          - heading "Pandas" [level=2] [ref=e319]
        - link "SciPy" [ref=e321] [cursor=pointer]:
          - /url: /python/scipy/index.php
          - heading "SciPy" [level=2] [ref=e323]
        - link "ASP" [ref=e325] [cursor=pointer]:
          - /url: /asp/default.asp
          - heading "ASP" [level=2] [ref=e327]
        - link "AngularJS" [ref=e329] [cursor=pointer]:
          - /url: /angularjs/default.asp
          - heading "AngularJS" [level=2] [ref=e331]
        - link "AppML" [ref=e333] [cursor=pointer]:
          - /url: /appml/default.asp
          - heading "AppML" [level=2] [ref=e335]
        - link "Go" [ref=e337] [cursor=pointer]:
          - /url: /go/index.php
          - heading "Go" [level=2] [ref=e339]
        - link "TypeScript" [ref=e341] [cursor=pointer]:
          - /url: /typescript/index.php
          - heading "TypeScript" [level=2] [ref=e343]
        - link "Django" [ref=e345] [cursor=pointer]:
          - /url: /django/index.php
          - heading "Django" [level=2] [ref=e347]
        - link "MongoDB" [ref=e349] [cursor=pointer]:
          - /url: /mongodb/index.php
          - heading "MongoDB" [level=2] [ref=e351]
        - link "Statistics" [ref=e353] [cursor=pointer]:
          - /url: /statistics/index.php
          - heading "Statistics" [level=2] [ref=e355]
        - link "Data Science" [ref=e357] [cursor=pointer]:
          - /url: /datascience/default.asp
          - heading "Data Science" [level=2] [ref=e359]
        - link "PostgreSQL" [ref=e361] [cursor=pointer]:
          - /url: /postgresql/index.php
          - heading "PostgreSQL" [level=2] [ref=e363]
        - link "HowTo" [ref=e365] [cursor=pointer]:
          - /url: /howto/default.asp
          - heading "HowTo" [level=2] [ref=e367]
        - link "Rust" [ref=e369] [cursor=pointer]:
          - /url: /rust/index.php
          - heading "Rust" [level=2] [ref=e371]
        - link "Spaces" [ref=e373] [cursor=pointer]:
          - /url: /spaces/index.php
          - heading "Spaces" [level=2] [ref=e375]
        - link "Typing Speed" [ref=e377] [cursor=pointer]:
          - /url: /typingspeed/default.asp
          - heading "Typing Speed" [level=2] [ref=e379]
        - link "Excel" [ref=e381] [cursor=pointer]:
          - /url: /excel/index.php
          - heading "Excel" [level=2] [ref=e383]
        - link "DSA - Data Structures and Algorithms" [ref=e385] [cursor=pointer]:
          - /url: /dsa/index.php
          - heading "DSA - Data Structures and Algorithms" [level=2] [ref=e387]
        - link "Machine Learning" [ref=e389] [cursor=pointer]:
          - /url: /python/python_ml_getting_started.asp
          - heading "Machine Learning" [level=2] [ref=e391]
        - link "Artificial Intelligence" [ref=e393] [cursor=pointer]:
          - /url: /ai/default.asp
          - heading "Artificial Intelligence" [level=2] [ref=e395]
        - link "Introduction to Programming" [ref=e397] [cursor=pointer]:
          - /url: /programming/index.php
          - heading "Introduction to Programming" [level=2] [ref=e399]
        - link "Bash" [ref=e401] [cursor=pointer]:
          - /url: /bash/index.php
          - heading "Bash" [level=2] [ref=e403]
        - link "Swift" [ref=e405] [cursor=pointer]:
          - /url: /swift/default.asp
          - heading "Swift" [level=2] [ref=e407]
        - link "Angular" [ref=e409] [cursor=pointer]:
          - /url: /angular/default.asp
          - heading "Angular" [level=2] [ref=e411]
    - generic [ref=e413]:
      - heading "Log in / Sign Up" [level=1] [ref=e414]
      - heading "Create an account to track your progress, get your own website, and get access to more features and learning materials:" [level=4] [ref=e415]:
        - text: Create an account to track your progress, get your own website,
        - text: "and get access to more features and learning materials:"
      - generic:
        - img "Log in"
      - paragraph [ref=e416]:
        - link "Sign Up" [ref=e417] [cursor=pointer]:
          - /url: https://profile.w3schools.com/sign-up?redirect_url=https%3A%2F%2Fwww.w3schools.com%2F
    - generic [ref=e419]:
      - heading "Code Editor" [level=1] [ref=e420]
      - heading "With our online code editor, you can edit code and view the result in your browser" [level=4] [ref=e421]
      - generic [ref=e422]:
        - textbox "w3schools.com/tryit" [disabled] [ref=e429]: www.w3schools.com/tryit/
        - generic [ref=e430]:
          - button "Frontend" [ref=e431] [cursor=pointer]
          - button "Backend" [ref=e432] [cursor=pointer]
        - generic:
          - generic:
            - img "Frontend Code Editor"
      - link "Try Frontend Editor (HTML/CSS/JS)" [ref=e433] [cursor=pointer]:
        - /url: /tryit/tryit.asp?filename=tryhtml_hello
      - link "Try Backend Editor (Python/PHP/Java/C..)" [ref=e434] [cursor=pointer]:
        - /url: /tryit/trycompiler.asp?filename=demo_python
    - generic [ref=e436]:
      - heading "W3Schools Spaces" [level=1] [ref=e437]
      - heading "If you want to create your own website, check out W3Schools Spaces." [level=3] [ref=e438]:
        - text: If you want to create your own website, check out
        - link "W3Schools Spaces" [ref=e439] [cursor=pointer]:
          - /url: /spaces/index.php
        - text: .
      - heading "No installation required - just open your browser and start coding:" [level=5] [ref=e440]
      - img "Dynamic Spaces" [ref=e443]
      - link "Learn More" [ref=e444] [cursor=pointer]:
        - /url: /spaces/index.php
    - generic [ref=e445]:
      - heading "Become a Plus User" [level=1] [ref=e446]
      - heading "And unlock powerful features:" [level=3] [ref=e447]
      - list [ref=e449]:
        - listitem [ref=e450]:
          - img "Checkmark" [ref=e451]
          - text: Browse W3Schools
          - strong [ref=e452]: without ads
        - listitem [ref=e453]:
          - img "Checkmark" [ref=e454]
          - text: Build and host Websites
        - listitem [ref=e455]:
          - img "Checkmark" [ref=e456]
          - text: Unlimited challenges
        - listitem [ref=e457]:
          - img "Checkmark" [ref=e458]
          - text: Unlimited practice tests
        - listitem [ref=e459]:
          - img "Checkmark" [ref=e460]
          - text: Get extra credits
        - listitem [ref=e461]:
          - img "Checkmark" [ref=e462]
          - text: Priority support
      - link "Learn More" [ref=e463] [cursor=pointer]:
        - /url: https://order.w3schools.com/plans
    - separator [ref=e464]
    - generic [ref=e465]:
      - generic:
        - generic [ref=e466]:
          - heading "For Teachers" [level=1] [ref=e467]
          - paragraph [ref=e468]: "Streamline your teaching:"
          - list [ref=e470]:
            - listitem [ref=e471]:
              - img "Checkmark" [ref=e472]
              - text: Manage your classroom
            - listitem [ref=e473]:
              - img "Checkmark" [ref=e474]
              - text: Ready-to-use learning materials
            - listitem [ref=e475]:
              - img "Checkmark" [ref=e476]
              - text: Customize study plans
            - listitem [ref=e477]:
              - img "Checkmark" [ref=e478]
              - text: Track student progress
            - listitem [ref=e479]:
              - img "Checkmark" [ref=e480]
              - text: Interactive coding challenges
          - link "Learn More" [ref=e481] [cursor=pointer]:
            - /url: /academy/index.php
        - link "Classroom" [ref=e483] [cursor=pointer]:
          - /url: /academy/index.php
          - generic [ref=e484]:
            - img "Classroom"
    - generic [ref=e486]:
      - heading "Color Picker" [level=1] [ref=e487]
      - heading "W3Schools' famous color picker:" [level=4] [ref=e488]
      - link "Colorpicker" [ref=e489] [cursor=pointer]:
        - /url: /colors/colors_picker.asp
        - img "Colorpicker" [ref=e491]
    - generic [ref=e493]:
      - heading "Code Game" [level=1] [ref=e494]
      - heading "Help the Lynx collect pine cones!" [level=2] [ref=e495]
      - link "Code Game":
        - /url: /codegame/index.html
        - generic:
          - img "Code Game"
      - paragraph [ref=e496]:
        - link "Play Game" [ref=e497] [cursor=pointer]:
          - /url: /codegame/index.html
    - generic [ref=e498]:
      - heading "Exercises and Quizzes" [level=2] [ref=e499]
      - heading "Test your skills!" [level=4] [ref=e500]
      - generic [ref=e501]:
        - paragraph [ref=e503]:
          - link "Exercises" [ref=e504] [cursor=pointer]:
            - /url: /exercises/index.php
        - paragraph [ref=e506]:
          - link "Quizzes" [ref=e507] [cursor=pointer]:
            - /url: /quiztest/default.asp
    - generic [ref=e508]:
      - heading "Web Templates" [level=1] [ref=e509]
      - heading "Browse our selection of free responsive HTML Templates" [level=4] [ref=e510]:
        - text: Browse our selection of
        - strong [ref=e511]: free
        - text: responsive HTML Templates
      - link "W3.CSS Templates" [ref=e513] [cursor=pointer]:
        - /url: /w3css/w3css_templates.asp
        - generic [ref=e514]:
          - img "W3.CSS Templates"
      - paragraph [ref=e515]:
        - link "Browse Templates" [ref=e516] [cursor=pointer]:
          - /url: /w3css/w3css_templates.asp
    - generic [ref=e518]:
      - heading "Kickstart your career" [level=2] [ref=e519]
      - paragraph [ref=e520]: Get certified by completing a course
      - link "Get started" [ref=e521] [cursor=pointer]:
        - /url: https://campus.w3schools.com/collections/course-catalog
      - img [ref=e522]
      - img [ref=e525]:
        - generic [ref=e527]: w
        - generic [ref=e528]: "3"
        - generic [ref=e529]: s
        - generic [ref=e530]: c
        - generic [ref=e531]: h
        - generic [ref=e532]: o
        - generic [ref=e533]: o
        - generic [ref=e534]: l
        - generic [ref=e535]: s
        - generic [ref=e536]: C
        - generic [ref=e537]: E
        - generic [ref=e538]: R
        - generic [ref=e539]: T
        - generic [ref=e540]: I
        - generic [ref=e541]: F
        - generic [ref=e542]: I
        - generic [ref=e543]: E
        - generic [ref=e544]: D
        - generic [ref=e545]: .
        - generic [ref=e546]: "2"
        - generic [ref=e547]: "0"
        - generic [ref=e548]: "2"
        - generic [ref=e549]: "5"
    - generic [ref=e552]:
      - heading "How To Section" [level=2] [ref=e553]
      - heading "Code snippets for HTML, CSS and JavaScript" [level=4] [ref=e554]
      - heading "For example, how to create a slideshow:" [level=6] [ref=e555]
      - generic [ref=e556]:
        - textbox "Select template" [disabled] [ref=e563]: www.w3schools.com/howto/
        - iframe [ref=e564]:
          - generic [ref=f2e2]:
            - generic [ref=f2e3]:
              - generic [ref=f2e4]: 1 / 3
              - img [ref=f2e5]
              - generic [ref=f2e6]: Caption Text
            - generic [ref=f2e7] [cursor=pointer]: ❮
            - generic [ref=f2e8] [cursor=pointer]: ❯
      - link "Learn How To" [ref=e566] [cursor=pointer]:
        - /url: /howto/default.asp
  - generic [ref=e570]:
    - generic [ref=e571]:
      - link "W3Schools.com" [ref=e573] [cursor=pointer]:
        - /url: //www.w3schools.com
        - generic [ref=e574]: 
      - link "PLUS" [ref=e576] [cursor=pointer]:
        - /url: https://order.w3schools.com/plans
      - link "SPACES" [ref=e578] [cursor=pointer]:
        - /url: /spaces/index.php
      - link "GET CERTIFIED" [ref=e580] [cursor=pointer]:
        - /url: https://campus.w3schools.com/collections/certifications
      - link "FOR TEACHERS" [ref=e582] [cursor=pointer]:
        - /url: /academy/index.php
      - link "BOOTCAMPS" [ref=e584] [cursor=pointer]:
        - /url: /bootcamp/index.php
      - link "CONTACT US" [ref=e586] [cursor=pointer]:
        - /url: javascript:void(0);
    - generic [ref=e587]:
      - generic [ref=e588]:
        - heading "Top Tutorials" [level=5] [ref=e589]
        - link "HTML Tutorial" [ref=e590] [cursor=pointer]:
          - /url: /html/default.asp
        - link "CSS Tutorial" [ref=e591] [cursor=pointer]:
          - /url: /css/default.asp
        - link "JavaScript Tutorial" [ref=e592] [cursor=pointer]:
          - /url: /js/default.asp
        - link "How To Tutorial" [ref=e593] [cursor=pointer]:
          - /url: /howto/default.asp
        - link "SQL Tutorial" [ref=e594] [cursor=pointer]:
          - /url: /sql/default.asp
        - link "Python Tutorial" [ref=e595] [cursor=pointer]:
          - /url: /python/default.asp
        - link "W3.CSS Tutorial" [ref=e596] [cursor=pointer]:
          - /url: /w3css/default.asp
        - link "Bootstrap Tutorial" [ref=e597] [cursor=pointer]:
          - /url: /bootstrap/bootstrap_ver.asp
        - link "PHP Tutorial" [ref=e598] [cursor=pointer]:
          - /url: /php/default.asp
        - link "Java Tutorial" [ref=e599] [cursor=pointer]:
          - /url: /java/default.asp
        - link "C++ Tutorial" [ref=e600] [cursor=pointer]:
          - /url: /cpp/default.asp
        - link "jQuery Tutorial" [ref=e601] [cursor=pointer]:
          - /url: /jquery/default.asp
      - generic [ref=e602]:
        - heading "Top References" [level=5] [ref=e603]
        - link "HTML Reference" [ref=e604] [cursor=pointer]:
          - /url: /tags/default.asp
        - link "CSS Reference" [ref=e605] [cursor=pointer]:
          - /url: /cssref/index.php
        - link "JavaScript Reference" [ref=e606] [cursor=pointer]:
          - /url: /jsref/default.asp
        - link "SQL Reference" [ref=e607] [cursor=pointer]:
          - /url: /sql/sql_ref_keywords.asp
        - link "Python Reference" [ref=e608] [cursor=pointer]:
          - /url: /python/python_reference.asp
        - link "W3.CSS Reference" [ref=e609] [cursor=pointer]:
          - /url: /w3css/w3css_references.asp
        - link "Bootstrap Reference" [ref=e610] [cursor=pointer]:
          - /url: /bootstrap/bootstrap_ref_all_classes.asp
        - link "PHP Reference" [ref=e611] [cursor=pointer]:
          - /url: /php/php_ref_overview.asp
        - link "HTML Colors" [ref=e612] [cursor=pointer]:
          - /url: /colors/colors_names.asp
        - link "Java Reference" [ref=e613] [cursor=pointer]:
          - /url: /java/java_ref_keywords.asp
        - link "AngularJS Reference" [ref=e614] [cursor=pointer]:
          - /url: /angularjs/angularjs_ref_directives.asp
        - link "jQuery Reference" [ref=e615] [cursor=pointer]:
          - /url: /jquery/jquery_ref_overview.asp
      - generic [ref=e616]:
        - heading "Top Examples" [level=5] [ref=e617]
        - link "HTML Examples" [ref=e618] [cursor=pointer]:
          - /url: /html/html_examples.asp
        - link "CSS Examples" [ref=e619] [cursor=pointer]:
          - /url: /css/css_examples.asp
        - link "JavaScript Examples" [ref=e620] [cursor=pointer]:
          - /url: /js/js_examples.asp
        - link "How To Examples" [ref=e621] [cursor=pointer]:
          - /url: /howto/default.asp
        - link "SQL Examples" [ref=e622] [cursor=pointer]:
          - /url: /sql/sql_examples.asp
        - link "Python Examples" [ref=e623] [cursor=pointer]:
          - /url: /python/python_examples.asp
        - link "W3.CSS Examples" [ref=e624] [cursor=pointer]:
          - /url: /w3css/w3css_examples.asp
        - link "Bootstrap Examples" [ref=e625] [cursor=pointer]:
          - /url: /bootstrap/bootstrap_examples.asp
        - link "PHP Examples" [ref=e626] [cursor=pointer]:
          - /url: /php/php_examples.asp
        - link "Java Examples" [ref=e627] [cursor=pointer]:
          - /url: /java/java_examples.asp
        - link "XML Examples" [ref=e628] [cursor=pointer]:
          - /url: /xml/xml_examples.asp
        - link "jQuery Examples" [ref=e629] [cursor=pointer]:
          - /url: /jquery/jquery_examples.asp
      - generic [ref=e630]:
        - link "Get Certified" [ref=e631] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/course-catalog
          - heading "Get Certified" [level=5] [ref=e632]
        - link "HTML Certificate" [ref=e633] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/html-certificate
        - link "CSS Certificate" [ref=e634] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/css-certificate
        - link "JavaScript Certificate" [ref=e635] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/javascript-certificate
        - link "Front End Certificate" [ref=e636] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/front-end-certificate
        - link "SQL Certificate" [ref=e637] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/sql-certificate
        - link "Python Certificate" [ref=e638] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/python-certificate
        - link "PHP Certificate" [ref=e639] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/php-certificate
        - link "jQuery Certificate" [ref=e640] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/jquery-certificate
        - link "Java Certificate" [ref=e641] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/java-certificate
        - link "C++ Certificate" [ref=e642] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/c-certificate
        - link "C# Certificate" [ref=e643] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/c-certificate-1
        - link "XML Certificate" [ref=e644] [cursor=pointer]:
          - /url: https://campus.w3schools.com/collections/certifications/products/xml-certificate
    - generic [ref=e645]:
      - link "" [ref=e646] [cursor=pointer]:
        - /url: https://www.youtube.com/@w3schools
        - generic [ref=e647]: 
      - link "" [ref=e648] [cursor=pointer]:
        - /url: https://www.linkedin.com/company/w3schools.com/
        - generic [ref=e649]: 
      - link "" [ref=e650] [cursor=pointer]:
        - /url: https://discord.com/invite/w3schools
        - generic [ref=e651]: 
      - link "" [ref=e652] [cursor=pointer]:
        - /url: https://www.facebook.com/w3schoolscom/
        - generic [ref=e653]: 
      - link "" [ref=e654] [cursor=pointer]:
        - /url: https://www.instagram.com/w3schools.com_official/
        - generic [ref=e655]: 
      - link "FORUM" [ref=e656] [cursor=pointer]:
        - /url: /forum/index.php
      - link "ABOUT" [ref=e657] [cursor=pointer]:
        - /url: /about/default.asp
      - link "ACADEMY" [ref=e658] [cursor=pointer]:
        - /url: /academy/index.php
    - generic [ref=e659]:
      - text: W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our
      - link "terms of use" [ref=e660] [cursor=pointer]:
        - /url: /about/about_copyright.asp
      - text: ", cookies and"
      - link "privacy policy" [ref=e661] [cursor=pointer]:
        - /url: /about/about_privacy.asp
      - text: .
      - link "Copyright 1999-2026" [ref=e662] [cursor=pointer]:
        - /url: /about/about_copyright.asp
      - text: by Refsnes Data. All Rights Reserved.
      - link "W3Schools is Powered by W3.CSS" [ref=e663] [cursor=pointer]:
        - /url: //www.w3schools.com/w3css/default.asp
      - text: .
  - text: "-->"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { injectAxe, checkA11y } from 'axe-playwright';
  3  | import { axeConsoleLogger, axeTextReport, axeJsonReport } from '../dist/index.js';
  4  | const path = require('path');
  5  | const { unlinkSync, existsSync, readFileSync } = require('fs');
  6  | 
  7  | test.describe('Axe Reporting Utils', () => {
  8  |   test('should test a website with logger reporter', async ({ page }) => {
  9  |     // Navigate to a test website
> 10 |     await page.goto('https://www.w3schools.com');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  11 | 
  12 |     // Inject axe-core
  13 |     await injectAxe(page);
  14 | 
  15 |     // Get accessibility violations
  16 |     const violations = await page.evaluate(async () => {
  17 |       const results = await (window as any).axe.run();
  18 |       return results;
  19 |     });
  20 | 
  21 |     // Test the logger function
  22 |     axeConsoleLogger(violations);
  23 | 
  24 |     // Verify that violations were logged
  25 |     expect(violations).toBeDefined();
  26 |     expect(Array.isArray(violations.violations)).toBe(true);
  27 |   });
  28 | 
  29 |   test('should test a website with logReport reporter', async ({ page }) => {
  30 |     // Navigate to a test website
  31 |     await page.goto('https://www.w3schools.com');
  32 | 
  33 |     // Inject axe-core
  34 |     await injectAxe(page);
  35 | 
  36 |     // Get accessibility violations
  37 |     const violations = await page.evaluate(async () => {
  38 |       const results = await (window as any).axe.run();
  39 |       return results;
  40 |     });
  41 | 
  42 |     // Create a test file path
  43 |     const reportPath = path.join(__dirname, 'axe-report.txt');
  44 | 
  45 |     // Test the logReport function
  46 |     axeTextReport(violations, reportPath);
  47 | 
  48 |     // Verify that the report file was created
  49 |     expect(existsSync(reportPath)).toBe(true);
  50 | 
  51 |     // Clean up
  52 |     unlinkSync(reportPath);
  53 |   });
  54 | 
  55 |   test('should write axe results to a JSON report file', async ({ page }) => {
  56 |     await page.goto('https://www.w3schools.com');
  57 |     await injectAxe(page);
  58 | 
  59 |     const violations = await page.evaluate(async () => {
  60 |       const results = await (window as any).axe.run();
  61 |       return results;
  62 |     });
  63 | 
  64 |     const reportPath = path.join(__dirname, 'axe-report.json');
  65 |     axeJsonReport(violations, __dirname, 'axe-report.json');
  66 | 
  67 |     expect(existsSync(reportPath)).toBe(true);
  68 | 
  69 |     const content = readFileSync(reportPath, 'utf8');
  70 |     expect(JSON.parse(content)).toEqual(violations);
  71 | 
  72 |     unlinkSync(reportPath);
  73 |   });
  74 | });
```