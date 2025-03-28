.PHONY: install build dev test storybook lint clean changeset version publish test-coverage release test-watch

# Install dependencies
install:
	pnpm install

# Build all packages
build:
	pnpm build

# Run development servers for all packages
dev:
	pnpm dev

# Run tests across all packages
test:
	pnpm test

# Run tests in watch mode
test-watch:
	pnpm test:watch

# Run tests with coverage report
test-coverage:
	pnpm test -- --coverage

# Run Storybook documentation
storybook:
	pnpm --filter supersummary-docs dev

# Run linting
lint:
	pnpm -r lint

# Clean build artifacts
clean:
	rm -rf node_modules
	pnpm -r exec -- rm -rf dist node_modules .turbo

# Create a changeset
changeset:
	pnpm changeset

# Apply versions from changesets
version:
	pnpm changeset version

# Publish packages to npm
publish:
	pnpm build
	pnpm changeset publish

# Release a new version (create changeset, version, and publish)
release:
	pnpm build
	pnpm changeset version
	pnpm changeset publish

# Build a specific package (usage: make build-pkg PKG=react)
build-pkg:
	pnpm --filter supersummary-${PKG} build

# Test a specific package (usage: make test-pkg PKG=react)
test-pkg:
	pnpm --filter supersummary-${PKG} test

# Run tests in watch mode for a specific package (usage: make test-watch-pkg PKG=react)
test-watch-pkg:
	pnpm --filter supersummary-${PKG} test:watch

# Run test coverage for a specific package (usage: make test-coverage-pkg PKG=react)
test-coverage-pkg:
	pnpm --filter supersummary-${PKG} test -- --coverage

# Development for a specific package (usage: make dev-pkg PKG=react)
dev-pkg:
	pnpm --filter supersummary-${PKG} dev 