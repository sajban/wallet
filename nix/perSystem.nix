{ pkgs }:

let
  nodePackages = import ./default.nix {
    inherit pkgs system;
  };

in
{
  packages = {
    ambire-wallet = nodePackages.ambire-wallet.override {
      buildInputs = with pkgs; [ pkgconfig hidapi ];
    };
  };
}
