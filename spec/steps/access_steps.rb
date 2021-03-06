module AccessSteps
  step 'I access the index page' do
    visit '/'
  end

  step 'I see my lists' do
    expect(page).to have_content('My tasks')
    expect(page).to have_content('My other tasks')
  end

  step 'I see my pomodoros' do
    expect(page).to have_content('My important task!')
    expect(page).to have_content('My other important task!')
  end

  step 'no running tomato' do
    expect(page).to_not have_button('Finalizar')
    expect(page).to_not have_button('Cancelar')
  end
end

RSpec.configure { |c| c.include AccessSteps }
