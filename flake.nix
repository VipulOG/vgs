{
  description = "My Awesome Desktop Shell";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    ags = {
      url = "github:aylur/ags";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = {
    self,
    nixpkgs,
    ...
  } @ inputs: let
    systems = ["x86_64-linux"];
    eachSystem = f:
      nixpkgs.lib.genAttrs systems (
        s: f nixpkgs.legacyPackages.${s} inputs.ags.packages.${s}
      );
  in {
    devShells = eachSystem (
      pkgs: agsPkgs: {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [
            agsPkgs.agsFull
            nodejs_20
            pre-commit
            treefmt
            nodePackages.prettier
            alejandra
          ];
        };
      }
    );
  };
}
