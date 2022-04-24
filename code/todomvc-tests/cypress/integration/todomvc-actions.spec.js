/// <reference types="cypress"/>

import { 
  navigate,
  addTodo,
  validateTodoText,
  toggleTodo,
  clearCompleted,
  validateTodoCompletedState,
  validateToggleState,
  validateNumberOfTodosShown,
 } from '../page-objects/todo-page'

describe('todo actions', ()=>{
    //const todoPage = new TodoPage()
    beforeEach(() => {
      navigate()

      addTodo('Clean my cook')


      //cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')
      //cy.visit('http://todomvc-app-for-testing.surge.sh/')
      //cy.get('.new-todo', {timeout:6000}).type("Clean my cook{enter}") 

    })
//Creando TS Inicial : Iniciando la navegacion por el sitio y creando tarea.
/*
//Creando primer test case Crear una tarea 
//it('should navigate to the todomvc App', () =>
it('should be able to add a new todo to the list', () =>
{

    /*
    //Cuando el enlace no existe
    cy.visit('http://todomvc-app-for-testing.surge.sh/this-does-not-exist')*/

   
    //Agregando tercer test case:hacer click a la tarea para poder removerla de las pendientes.
    //cy.get('.toggle').click()
     /*
    //Agregando cuarto test case: Eliminar la tarea completada.
    cy.contains('Clear completed').click()




})
 */
//Agrupando test con Mocha
it('should add a new todo to the list', ()=>{

//Agregando quinto test case: Validando el label de la tarea a crearse
validateTodoText(0, 'Clean my cook')
//Agregando sexto test case: no haciendo check en el toggle de la tarea
//cy.get('.toggle').should('not.be.checked')
validateToggleState(0, false)



})
describe('toggling todos', () =>{
it('should toggle test correctly', ()=>{
/*cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')
cy.visit('http://todomvc-app-for-testing.surge.sh/')
cy.get('.new-todo', {timeout:6000}).type("Clean my cook{enter}") 
*/

//Agregando septimo test case: Crear un texto con CSS de estilo diferente.
//cy.get('.toggle').click()
//cy.get('label').should('have.css', 'text-decoration-line','line-through')
toggleTodo(0)
validateTodoCompletedState(0, true)
    
})

it('should clear completed', ()=>{
//Agregando septimo test case: Crear un texto con CSS de estilo diferente.
//cy.get('.toggle').click()
//cy.get('label').should('have.css', 'text-decoration-line','line-through')  

//cy.get('.toggle').click()

//Agregamos octavo test case: Limpiando la caja de texto
//cy.contains('Clear').click()
//Agregando noveno test case: Visualizando toda la lista de tareas
//cy.get('.todo-list').should('not.have.descendants', 'li')
toggleTodo(0)

clearCompleted()

validateNumberOfTodosShown(0)

       })
    })
})
