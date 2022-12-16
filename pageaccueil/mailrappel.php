<?php

$destinataire = "adresse@fai.com";
$objet = "Vos animaux aussi ont des rappels de vaccin !";
$message = "
Bonjour,
La santé de vos petits animaux est tout aussi importante !
N'hésitez pas à reprendre rendez-vous avec votre vétérinaire pour faire le point sur les vaccins.

Vous pouvez prendre rendez-vous en appelant l'accueil au XXXX ou par mail en spécifiant 'prise de rendez-vous - vaccin'.
Bonne journée,
Cordialement";

if (mail($destinataire, $objet, $message))

    echo "Votre email a bien été envoyé";

else
    echo "Un problème est survenu";
