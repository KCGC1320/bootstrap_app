/**
 * @author Kevin Christian G. Cabana
 * @description intialize angular module
 * @2020
 */

(function ($) {
    angular
        .module('app')
        .directive('projectSearch', projectSearch)
        .directive('megaMenu', megaMenu)


    projectSearch.$inject = []
    megaMenu.$inject = []

    function projectSearch() {
        var directive = {
            restrict: 'E',
            controller: 'appController',
            controllerAs: 'vm',
            template: 
                `<form class="d-none d-sm-inline-block">
                    <div class="input-group input-group-navbar">
                        <input type="text" class="form-control" placeholder="Search projects…" aria-label="Search">
                        <div class="input-group-append">
                            <button class="btn" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>`,
        };
        return directive;
    }

    function megaMenu() {
        var directive = {
            restrict: 'E',
            controller: 'appController',
            controllerAs: 'vm',
            template: 
                `<div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mega Menu
                    </button>
                    <div class="dropdown-menu dropdown-menu-left dropdown-mega" aria-labelledby="dropdownMenuButton">
                        <div class="d-md-flex align-items-start justify-content-start">
                            <div class="dropdown-mega-list">
                                <div class="dropdown-header">UI Elements</div>
                                <a class="dropdown-item" href="#">Alerts</a>
                                <a class="dropdown-item" href="#">Buttons</a>
                                <a class="dropdown-item" href="#">Cards</a>
                                <a class="dropdown-item" href="#">Carousel</a>
                                <a class="dropdown-item" href="#">General</a>
                                <a class="dropdown-item" href="#">Grid</a>
                                <a class="dropdown-item" href="#">Modals</a>
                                <a class="dropdown-item" href="#">Tabs</a>
                                <a class="dropdown-item" href="#">Typography</a>
                            </div>
                            <div class="dropdown-mega-list">
                                <div class="dropdown-header">Forms</div>
                                <a class="dropdown-item" href="#">Layouts</a>
                                <a class="dropdown-item" href="#">Basic Inputs</a>
                                <a class="dropdown-item" href="#">Input Groups</a>
                                <a class="dropdown-item" href="#">Advanced Inputs</a>
                                <a class="dropdown-item" href="#">Editors</a>
                                <a class="dropdown-item" href="#">Validation</a>
                                <a class="dropdown-item" href="#">Wizard</a>
                            </div>
                            <div class="dropdown-mega-list">
                                <div class="dropdown-header">Tables</div>
                                <a class="dropdown-item" href="#">Basic Tables</a>
                                <a class="dropdown-item" href="#">Responsive Table</a>
                                <a class="dropdown-item" href="#">Table with Buttons</a>
                                <a class="dropdown-item" href="#">Column Search</a>
                                <a class="dropdown-item" href="#">Muulti Selection</a>
                                <a class="dropdown-item" href="#">Ajax Sourced Data</a>
                            </div>
                        </div>
                    </div>
                </div>`,
        };
        return directive;
    }



}(jQuery));
