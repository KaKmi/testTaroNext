import { View } from '@tarojs/components'
import TodoList from './todo-list'
import Footer from './footer'
import { useStore, TodoStore, clearCompletedTodos, getCompletedCount } from '@/store/store'
import './main.scss'
import React from "react";
function MainSection () {
  const { todos } = useStore(TodoStore)
  const todosCount = todos.length
  const completedCount = getCompletedCount(todos)
  return (
    <View className='main'>
      <TodoList />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={() => clearCompletedTodos()}
        />
      )}
    </View>
  )
}

export default MainSection
