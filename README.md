# PFE

## Sujet :

### Pré-étude des Dossiers Judiciaires utilisant l'Intelligence Artificielle pour l'Identification des Vices de Procédures 


Comment développer un système de pré-étude des dossiers judiciaires pour identifier rapidement les vices de procédures et les affaires pouvant être jugées plus rapidement, afin d'améliorer l'efficacité des tribunaux et de réduire la charge de travail des institutions judiciaires ?

Les tribunaux et institutions judiciaires sont souvent submergés par une charge de travail énorme, avec des milliers de dossiers à traiter quotidiennement. Cela peut entraîner des retards considérables dans le traitement des affaires, aggravés par des vices de procédure, des questions juridiques complexes ou l'absence de preuves solides. En conséquence, le système judiciaire peut devenir inefficace, augmentant ainsi les délais pour rendre justice. L'introduction de l'intelligence artificielle (IA) dans le processus de gestion des cas peut aider à effectuer une pré-étude des dossiers, identifiant rapidement les vices de procédure et classifiant les affaires selon leur complexité. Cela permettrait de prioriser les dossiers qui peuvent être traités plus rapidement, améliorant ainsi l'efficacité des tribunaux.

## Équipe :

- Chirine BETTAYEB (Big Data)
- Marie GRACIANI (IOT)
- Anuujin ENKHMUNKH (IOT)
- Dorine BATTISTUTA (IOT)
- Ines GOULAMHOUSSEN (Big Data)
- Clement GASNET (Cloud)





# Plan


* **Utiliser plusieurs API de reconnaissance de texte, d'image et interpréter les résultats :**
    * OpenCV (with AI-based approaches):

        AI-based: Partially.
            How it uses AI: While OpenCV itself is primarily an image processing library, it can integrate with machine learning models and AI techniques. For example, you can use pre-trained deep learning models for detecting certain objects in images, including signatures. OpenCV can also work with TensorFlow and Keras models to enhance its ability to detect signatures using AI.
        Use case: You can use OpenCV to preprocess images (e.g., edge detection, contours) and then apply an AI model for recognizing handwritten signatures.
        AI Complexity: If used with pre-trained AI models or deep learning frameworks, it becomes AI-driven.
    * OpenAI GPT-4 API fine-tuned with French legal documents for detecting flaws.

    
* **Utiliser du multi threading pour faire en sorte que l'analyse soit plus rapides surtout a cause de l'utilisation de plusieurs API** 
* **Le split du powerpoint sera peut être nécéssaire pour contrer les limites de taille des API lors de l'analyse**




Voir si on veut mêttre de la sauvegarde de données ou d'anciennes analyse, en plus de la connexion a un compte, voir pour un programme de  license payante et utiliser des IA plus ou moins rapides en focntions maios surtout plus ou moins chères ( reagrder une tbale des prix sur les API et en focntion du document donner un prix global pour le business model)