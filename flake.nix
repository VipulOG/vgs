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
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
    agsPkgs = inputs.ags.packages.${system};
  in {
    devShells.${system} = {
      default = pkgs.mkShell {
        packages = with pkgs;
        with agsPkgs; [
          agsFull
          nodejs_20
          typescript-language-server
          nil
          pre-commit
          treefmt
          nodePackages.prettier
          alejandra
        ];
      };
    };

    packages.${system}.default = inputs.ags.lib.bundle {
      inherit pkgs;

      src = ./.;
      name = "vgs";
      entry = "app.ts";
      gtk4 = false;

      # additional libraries and executables to add to gjs' runtime
      extraPackages = with pkgs;
      with agsPkgs; [
        wireplumber
        battery
        network
        notifd
      ];
    };

    formatter.${system} = pkgs.treefmt;
  };
}
