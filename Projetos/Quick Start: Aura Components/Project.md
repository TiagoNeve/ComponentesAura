# Quick Start: Aura Components

## Create a Server-side Apex Controller Class

### Introduction

Criar um simples component que mostra os contatos.

### Follow Along with Trail Together

Video que o cara ensina como fazer o projeto em vídeo.

### My Domain Is Already On in Your Trailhead Playground

Explicando que um domínio é importante para org's de produção

### Build an Apex Controller

> MyContactListController.apxc
```Java
public with sharing MyContactListController
{
    @AuraEnabled 
    public static List<Contact> getContacts(Id recordId)
    {
        return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact WHERE AccountId = :recordId];
    }
}
```