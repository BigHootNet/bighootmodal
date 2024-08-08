
# @bighoot/modal-library

## Description

`@bighoot/modal-library` est une bibliothèque React simple et personnalisable pour afficher des modals. Elle est facile à utiliser et à intégrer dans vos projets React.

## Installation

Vous pouvez installer la bibliothèque via npm :

```bash
npm install @bighoot/modal-library
```
ou via yarn :

```bash
yarn add @bighoot/modal-library
```
## Utilisation 

Voici un exemple de comment utiliser @bighoot/modal-library :

```js
import React, { useState } from 'react';
import Modal from '@bighoot/modal-library';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal} title="Example Modal">
        <p>This is a simple modal example.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;
```
## Propriétés du composant Modal
```
isOpen (boolean) : Détermine si la modal est ouverte.
```
```
onClose (function) : Fonction appelée pour fermer la modal.
```
```
title (string) : Le titre de la modal.
```
```
children (ReactNode) : Le contenu de la modal.
```

## Prérequis

Avant d'utiliser cette bibliothèque, assurez-vous d'avoir les éléments suivants installés :

- **Node.js** : Version 12 ou supérieure.
- **React** : Version 17 ou supérieure.
- **styled-components** : Version 5 ou supérieure.



---------------------------------------
ENGLISH VERSION
---------------------------------------



# @bighoot/modal-library

## Description

`@bighoot/modal-library` is a simple and customizable React library that can be used to display modals. It's easy to use and integrate in your own React projects.

## Setup

You can download the library via npm :

```bash
npm install @bighoot/modal-library
```
or via yarn :

```bash
yarn add @bighoot/modal-library
```
## How to use 

Here is an example of how to use @bighoot/modal-library :

```js
import React, { useState } from 'react';
import Modal from '@bighoot/modal-library';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal} title="Example Modal">
        <p>This is a simple modal example.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;
```
## Modal components properties
```
isOpen (boolean) : Set if modal is open.
```
```
onClose (function) : Called function to close modal.
```
```
title (string) : Modal's title.
```
```
children (ReactNode) : Modal's content.
```

## Prerequisites

Before using this library, make sure you have the following dependencies : 

- **Node.js** : Version 12 or superior.
- **React** : Version 17 or superior.
- **styled-components** : Version 5 or superior.