angular.module('meuModulo', [])
	.controller('indexController', function ($scope) {
		$scope.tituloTabela = "Tabela em AngularJS";
		$scope.listaAluno = [];

		$scope.exemplo01 = {
			"nome": "Guilherme",
			"nota01": 7,
			"nota02": 8
		};
		$scope.exemplo02 = {
			"nome": "João",
			"nota01": 9,
			"nota02": 8
		};
		$scope.listaAluno.push($scope.exemplo01);
		$scope.listaAluno.push($scope.exemplo02);


		$scope.registrarAluno = function (aluno) {
			$scope.listaAluno.push(angular.copy(aluno));
			delete $scope.aluno;
			$scope.alunoForm.$setPristine();
		}
		$scope.fechar = function () {
			$scope.exibirFormRegistro = false;
		}
		$scope.excluirAluno = function (nome) {
			var listaAlunoNovo = $scope.listaAluno.filter(
				function (aluno) {
					return aluno.nome != nome;
				});
			$scope.listaAluno = listaAlunoNovo;
		}
		var alunoEditar;
		$scope.exibirEditarAluno = function (aluno) {
			$scope.exibirFormRegistro = true;
			$scope.editando = true;
			angular.copy(aluno, $scope.aluno);
			alunoEditar = aluno;
		}
		$scope.editarAluno = function (aluno) {
			$scope.editando = true;
			alunoEditar.nome = aluno.nome;
			alunoEditar.nota01 = aluno.nota01;
			alunoEditar.nota02 = aluno.nota02;
			$scope.exibirFormRegistro = false;
		}

	});