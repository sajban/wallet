{
  description = "A `flake-parts` module for Clojure development";

  inputs = {
    nixpkgs = { type = "indirect"; id = "nixpkgs"; };

    flake-parts = {
      type = "indirect";
      id = "flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };

  };

  outputs = inputs@{ self, flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; }
      (import ./nix/flakePart.nix);
}
