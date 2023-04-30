{ pkgs, ... }:
let
  nodePackages = import ./default.nix { inherit pkgs; };

in
{
  packages = {
    default = nodePackages.package.override {
      buildInputs = with pkgs; [ pkgconfig hidapi udev libusb1 ];
    };

    develop = pkgs.buildEnv {
      name = "ambire-wallet-develop-env";
      paths = with pkgs; [ pkgconfig hidapi udev libusb1 python3 typescript ];
    };
  };
}
