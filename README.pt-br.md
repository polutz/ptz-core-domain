# ptz-core-domain

[![Build Status](https://travis-ci.org/polutz/ptz-core-domain.svg)](https://travis-ci.org/polutz/ptz-core-domain)
[![NPM](https://img.shields.io/npm/v/ptz-core-domain.svg)](https://www.npmjs.com/package/ptz-core-domain)
[![codecov.io](http://codecov.io/github/polutz/ptz-core-domain/coverage.svg)](http://codecov.io/github/polutz/ptz-core-domain)
[![Dependency Status](https://gemnasium.com/polutz/ptz-core-domain.svg)](https://gemnasium.com/polutz/ptz-core-domain)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/polutz/ptz-core-domain)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Traduções
[pt-br](https://github.com/polutz/ptz-core-domain/blob/master/README.pt-br.md)
[en-us](https://github.com/polutz/ptz-core-domain/blob/master/README.md)

Este é o coração do Polutz, conjunto de móludos baseados em DDD (Domain Driven Design) 
e TDD (Test Driven Development).
Sinta-se livre para usar em seus projetos, e contribuir!

Nessa camada de Domínio (Domain), a ideia é utilizar o minimo possível de dependências, 
tentando ficar ao máximo com javascript puro.


## Como usar

### Instalação
```
    npm install --save ptz-core-domain
```

### Como usar
```javascript    
    import {
        validateEmail,
        EntityBase,
        EntityMinBase,
        IAppFuncArgs,
        ICreatedBy,
        IEntityMinBase,
        IEntityMinBaseArgs,
        IEntityBase,
        IEntityBaseArgs,
        IBaseRepository,
        IBaseApp,
        IBaseAppArgs
    } from 'ptz-core-domain';
```

## Contribuir com o projeto

### NPM Global packages
```
    npm install -g ts-node babel-cli
```

### Instalação
```
    npm install   
```

### Teste
```
    npm test
```
