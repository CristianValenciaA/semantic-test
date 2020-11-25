import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Boton = () => (

  <div>
    <Button animated='vertical' size='mini' href ="/Principal">
      <Button.Content hidden>Pagina Principal</Button.Content>
      <Button.Content visible>
        <Icon name='home'/>
      </Button.Content>
    </Button>
    <Button animated='vertical' size='mini' href ="/Menu">
      <Button.Content hidden>Ingresar a Menu</Button.Content>
      <Button.Content visible>
        <Icon name='table' />
      </Button.Content>
    </Button>
    <Button animated='vertical' size='mini' href="https://github.com/CristianValenciaA/semantic-test">
      <Button.Content hidden>Github de pagina</Button.Content>
      <Button.Content visible>
        <Icon name='github' />
      </Button.Content>
    </Button>
  </div>
)

export default Boton