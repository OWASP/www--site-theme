# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "www--site-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Scorching Oyster"]
  spec.email         = ["hyd@protonmail.com"]

  spec.summary       = "A theme for OWASP sites"
  spec.homepage      = "https://github.com/owasp/www--site-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", ">= 2.2.10"
  spec.add_development_dependency "rake", "~> 12.0"
end
