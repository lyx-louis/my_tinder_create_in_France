
# Projet PG219 2022

## Introduction

Le projet doit être réalisé par trinômes. Il a pour but de développer une application de rencontre. Cette application se nommera Tind’eirb. Pour la réaliser, il sera nécessaire de mettre en œuvre une architecture client-serveur. L’application à développer comportera ainsi une partie serveur et un client mobile. La plate-forme de référence pour le développement client sera Android. Le code client doit être implémenté via la stack Cordova avec un framework SPA de votre choix, le code serveur via Node/Express/Mongo.
Le rendu final du projet est une archive nommée pg219-2022-gN.zip avec N étant le
numéro de votre groupe. Cette archive doit contenir :
● Le code source de la partie serveur dans le répertoire src/serveur
● Le code source de la partie client dans le répertoire src/client
● Une documentation exhaustive de l’API REST du serveur au format OpenAPI dans le
répertoire doc/serveur, incluant une génération au format HTML. Regardez du côté
de l’outil Swagger pour cela.
Les fichiers sources doivent être correctement indentés, avec un nommage approprié des fonctions et variables. Un malus sera appliqué aux groupes ne respectant pas ces règles.
Enfin, faites particulièrement attention à la copie, nous utilisons un logiciel qui permet de détecter automatiquement les copier-coller, tout projet suspect sera étudié avec la plus grande attention...

---

## Fonctionnalités

### Inscription - authentification des utilisateurs
Il doit être possible de s’inscrire sur le serveur. Les informations qui doivent être fournies en cas d’inscription sont :
● e-mail (unique dans la base)
● username (e.g. @BGdu33)
● mot de passe
Pour s’authentifier il faut fournir son adresse mail et son mot de passe. Une authentification fournit un token (une clé) qui doit être conservée par le client et est fournie lors de la demande d’information. Une authentification est valable pour une durée maximale de 15
jours. Un utilisateur peut se déconnecter. Pour mettre en place des tokens sécurisés regardez du côté de JWT.

### Voir/éditer son profil
Un utilisateur a obligatoirement une page de profil. La page de profil présente un catalogue de photos (5 au maximum) ainsi que le prénom, âge, genre d'intérêt, description, orientation(optionnelle) et passions que l’utilisateur peut définir.
L’utilisateur est libre de supprimer/ajouter de nouvelles photos sans jamais dépasser les limites d’une photo au minimum et 5 photos au maximum. La première photo du catalogue sera utilisée comme photo de profil.
A tout moment, l’utilisateur peut modifier sa photo et sa description en cliquant sur le bouton d’édition. L’utilisateur pourra également définir/modifier son prénom, son age, ainsi que son genre d'intérêt (Homme, Femme, Tout le monde).
L’utilisateur pourra également définir s’il le souhaite son orientation (sous forme de texte,visible par tous les utilisateurs).
Enfin, l’utilisateur pourra lister ses passions sous forme de text séparé par une virgule (Ex:voyages, tennis, netflix). Elles seront affichées sous forme de bulles (chips).

### Afficher les profils à proximité
Lorsque l’utilisateur se connecte à l’application, il sera automatiquement dirigé vers cette page. Si le profil de l’utilisateur n’est pas encore complet, un message lui demandant de le compléter sera affiché.
Une fois le compte d’un utilisateur configuré (tous les champs obligatoires remplis, il lui sera possible de parcourir une liste de potentiels profils qui pourraient lui correspondre.
La liste de profils sera générée de manière aléatoire en utilisant la localisation GPS de dernière connexion des utilisateurs (il faudra donc mettre à jour cette information à chaque connexion), elle sera également filtrée selon le genre d'intérêt des utilisateurs.
Afin que l’application soit réactive, elle ne chargera que 20 profils à la fois, et proposera un mécanisme de chargement automatique pour charger les 20 profils suivants lorsque l’utilisateur atteint la fin de la liste.
L’utilisateur aura la possibilité de parcourir le profil d’un utilisateur suggéré (prénom, âge,photos, description, orientation si définie, passions). L’utilisateur pourra par la suite faire glisser le profil à droite pour indiquer son intérêt ou à gauche pour passer au profil suivant.

### Discussions
Si deux utilisateurs ont fait glisser à droite le profil de chacun et donc indiqué un intérêt mutuel, l’application proposera automatiquement de démarrer une discussion suite au “match”.
La page “discussions” affichera donc toutes les conversations démarrées suite à un
“match”. Il sera possible à l’utilisateur de de rafraîchir cette liste en la faisant glisser vers le bas.
Les utilisateurs auront la possibilité de communiquer uniquement par text. La photo de profil utilisée sera la première photo dans le catalogue de photos de l’utilisateur.
Les conversations seront automatiquement mises à jour suite à la réception d’un nouveau message, on pourra pour ce faire utiliser les sockets avec le serveur (ex: socketIO). Lorsqu’un utilisateur envoie un message, le serveur procèdera toujours par vérifier qu’il n’y a pas de contenu injurieux dans les messages, dans le cas échéant, le serveur remplacera automatiquement le message par un message automatique indiquant que le message de l’utilisateur a été supprimé pour cause de contenu injurieux.
