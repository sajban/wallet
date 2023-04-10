{ pkgs, ... }:
let
  nodePackages = import ./default.nix { inherit pkgs; };

in
{
  packages = {
    default = nodePackages.package.override {
      buildInputs = with pkgs; [ pkgconfig hidapi ];
    };
  };
}
