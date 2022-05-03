import { Card } from 'antd'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = ({ }: any) => {
  const [lista, setLista] = useState(['Tarefa Exemplo'])
  const [novaLista, setNovaLista] = useState('')

  const listaMapeada = lista.map((item, index) => {

    return (
      <>
        <Card style={{ background: 'rgb(3, 0, 43)', width: '800px', marginLeft: '280px', borderRadius: '10px' }}>
          <div style={{ display: 'flex' }}>
            <p style={{ color: 'white' }}>{item}</p>
            <button onClick={() => {
              const novoVetor = [...lista]
              novoVetor.splice(index, 1)
              setLista(novoVetor)
            }}>Excluir</button>
            <button onClick={() => {
              const novoVetor = [...lista]
              novoVetor.splice(index, 1)
              setLista(novoVetor)
              const pValue = prompt('edite')
              novoVetor.push(`${pValue}`)



            }}>Editar</button>
          </div>
        </Card>
        <br />
      </>
    )
  })


  const addTarefa = () => {
    setLista([...lista, novaLista])
  }

  return (
    <div style={{}}>
      <div style={{ marginLeft: '500px' }}>
        <h1 style={{ marginLeft: '110px' }}>Todo:</h1>
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <input style={{ marginBottom: '30px', height: '30px', borderRadius: '10px' }} type="text" placeholder='Nova Tarefa' onChange={(e) => {
            const inputValue = e.target.value
            setNovaLista(inputValue)
          }}
          />

          <button style={{ borderRadius: '10px', height: '30px' }} onClick={addTarefa}>Add Tarefa</button>
        </div>
      </div>
      <div style={{}}>
        <br />
        {listaMapeada}
      </div>
    </div>
  )
}

export default Home
