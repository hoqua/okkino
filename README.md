

# Okkino

This project was generated using [Nx](https://nx.dev).

## Run

Prerequisites: Docker, Node
1. clone git repo
2. npm i 
3. npm run dockers:dev
4. npm run db:migrate:dev
5. npm run start

## Useful commands
### NX generators

- GeneratorName: @nrwl/nest:resource, @nrwl/js:library
- LibraryName: library name prefixed utils, shared, feature, ui, etc 
- RootLibraryDirectory : root directory of the library (e.g. api, web, shared, etc)
- ScopeName : scope:api, scope:web, scope:shared, etc

```shell

# Feature lib: nx generate @nrwl/js:library --name=feature-user --directory=api --compiler=swc --buildable --tags "scope:api"
# Nest resource: nx g @nrwl/nest:resource --project=api-feature-user --directory=lib --type="graphql-code-first" --crud --name user
nx generate @nrwl/${GeneratorName} --name=${LibraryName} --directory=${RootLibraryDirectory} --compiler=swc --buildable --tags ${ScopeName}
```

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

