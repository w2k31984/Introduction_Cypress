/*/// <reference types="cypress" />

describe('filtering', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo').type("Clean my cook{enter}")
        cy.get('.new-todo').type("Learn JavaScript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")
        
        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('should filter "Active" todos', () =>{
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)

    })

    it('should filter "Complete" todos', () =>{
        cy.contains('Complete').click()
        cy.get('.todo-list li').should('have.length', 1)

    })
    it('should filter "All" todos', () =>{
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)

    })
    
})*/
//Utilizando Page Objects.
/// <reference types="cypress" />
import {
    navigate,
    addTodo,
    toggleTodo,
    showOnlyActiveTodos,
    showOnlyCompletedTodos,
    showAllTodos,
    validateNumberOfTodosShown,
  } from '../page-objects/todo-page'
  
  describe('filtering', function() {
    beforeEach(() => {
      navigate()
  
      addTodo('Clean room')
      addTodo('Learn JavaScript')
      addTodo('Use Cypress')
  
      toggleTodo(1)
    })
  
    it('should filter "Active" correctly', () => {
      showOnlyActiveTodos()
  
      validateNumberOfTodosShown(2)
    })
  
    it('should filter "Completed" correctly', () => {
      showOnlyCompletedTodos()
  
      validateNumberOfTodosShown(1)
    })
  
    it('should filter "All" correctly', () => {
      showAllTodos()
  
      validateNumberOfTodosShown(3)
    })
  })