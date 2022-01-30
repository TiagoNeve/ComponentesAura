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

## Create an Aura Component

### Follow Along with Trail Together

Um vídeo fazendo o procedimento do projeto e tals

### Create and Add an Aura Component to the Record Page

> MyContactList - Component Bundle
```HTML
<aura:component controller="MyContactListController" implements="flexipage:availableForRecordHome,force:hasRecordId" access="global">
    <aura:attribute name="recordId" type="Id" />
    <aura:attribute name="Account" type="Account" />
    <aura:attribute name="Contacts" type="Contact" />
    <aura:attribute name="Columns" type="List" />

    <force:recordData aura:id="accountRecord" 
                      recordId="{!v.recordId}"
                      targetFields="{!v.Account}"
                      layoutType="FULL"
                      />

    <lightning:card iconName="standard:contact" title="{! 'Contact List for ' + v.Account.Name}">
        <!-- list goes here -->
    </lightning:card>
</aura:component>
```

Depois de criar o component, basta adicionar no registro de Contas.
