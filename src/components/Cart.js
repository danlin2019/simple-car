export default function Cart(){
  return(<div className="bg-light p-3">
  <table className="table align-middle">
    <tbody>
      <tr>
        <td><a href="#">x</a></td>
        <td><img src="https://images.unsplash.com/photo-1728258652882-3fb20cdc4d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" className="table-image" alt="" /></td>
        <td>
          蔬菜
          <br />
          <small className="text-muted">NT$ 220</small>
        </td>
        <td>
          <select name="" id="" className="form-select"></select>
        </td>
        <td className="text-end">
          $440
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={5} className="text-end">總金額 NT$ 440</td>
      </tr>
    </tfoot>
  </table>
</div>)
}