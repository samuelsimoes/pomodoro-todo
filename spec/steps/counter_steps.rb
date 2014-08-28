module CounterSteps
  step 'I click in the first pomodoro start button' do
    within '.pomodoro-list-item:nth-child(1)' do
      click_on 'Iniciar'
    end
  end

  step 'the first pomodoro is initialized' do
    expect(page).to have_button('Finalizar')
    expect(page).to have_button('Cancelar')
    expect(page).to_not have_content('00:00')
  end

  step 'a running pomodoro in my current list' do
    Tomato.first.start!
  end

  step 'I click in the finish button' do
    expect(page).to_not have_content('00:00')
    expect(page).to have_button('Finalizar')
    click_on 'Finalizar'
  end

  step 'the pomodoro is finished' do
    expect(page).to_not have_button('Finalizar')
    expect(page).to_not have_button('Cancelar')
    expect(page).to_not have_content('My important task!')
    expect(page).to have_content('00:00')
  end

  step 'I click in the cancel button' do
    expect(page).to have_button('Finalizar')
    click_on 'Cancel'
  end

  step 'the pomodoro returns to the list and the counting is canceled' do
    expect(page).to_not have_button('Finalizar')
    expect(page).to_not have_button('Cancelar')
    expect(page).to have_content('00:00')
    expect(page).to have_content('My important task!')
  end
end

RSpec.configure { |c| c.include CounterSteps }
