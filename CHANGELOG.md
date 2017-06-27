## master


## 2.0.1 (June 26, 2017)

* Add index tests.
* Add @types/mongodb to project.

## 2.0.0 (June 3, 2017)

* Complete rewrite to Functional Programming.

## 1.5.2 (June 1, 2017)

* Update ptz-log.

## 1.5.1 (April 28, 2017)

* Transpiling Typescript to esnext.
* Add test for ***new EntityMinBase(null)*** with null args.

## 1.5.0 (April 25, 2017)

* Rename IAppFuncArgs.createdBy to authedUser.

## 1.4.0 (April 24, 2017)

* Move validations to ptz-validations.

## 1.3.7 (April 18, 2017)

* Fix HaveValidation.addErrors from cleanning errors.

## 1.3.6 (April 18, 2017)

* Fix validate: when required and empty string add error.

## 1.3.5 (April 18, 2017)

* Add HaveValidation.addErrors().
* Add Validate.

## 1.3.4 (April 18, 2017)

* Add IHaveValidation.

## 1.3.3 (April 13, 2017)

* Update ICreatedBy set user as nullable.

## 1.3.2 (April 13, 2017)

* Add IAppFuncArgs.

## 1.3.1 (April 13, 2017)

* Use Ilog from ptz-log in IBaseApp.

## 1.3.0 (April 13, 2017)

* Add ICreatedBy.user: TUser
    By removing the fields name, userId, username from ICreatedBy
    and creating the prop 'user: TUser'
    now the user is flexible.

## 1.2.2 (April 7, 2017)

* Remove babel-node, babel-polyfill, babel-core and ptz-babel-register.

## 1.2.1 (April 5, 2017)

* Add IBaseApp and IBaseAppArgs.
* Remove typings.

## 1.2.0 (April 5, 2017)

* Remove gulp.
* Add debug support for vs code.

## 1.1.9 (March 31, 2017)

* Fix IBaseRepository returns for getByIds and find.

## 1.1.8 (March 30, 2017)

* Add Generics to IBaseRepository.
* Move BaseRepositoryFake to ptz-core-app.

## 1.1.7 (March 30, 2017)

* Add BaseRepositoryFake in order to stub/mock tests.

## 1.1.6 (March 29, 2017)

* Exports IBaseRepository.

## 1.1.5 (March 29, 2017)

* Add IBaseRepository.

## 1.0.0 (March 04, 2017)

* Initial public release.
